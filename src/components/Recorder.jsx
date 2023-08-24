import { useRecordings } from '../store/recordingsStore';
import { useStore } from '../store/store';
import toast from 'react-hot-toast';
export const Recorder = () => {
  const {
    isRecording,
    setIsRecording,
    playRecordedKeys,
    clearKeysPressed,
    keysPressed,
  } = useStore((state) => state);
  const { addRecording } = useRecordings((state) => state);

  const handleClick = () => {
    setIsRecording(!isRecording);
  };

  const playRecording = () => {
    playRecordedKeys(keysPressed);
  };

  const saveRecording = () => {
    addRecording({
      keysPressed,
      name: `${Date.now()}-recording.quack`,
    });
    clearKeysPressed();
    toast('Recording saved!');
  };

  const dismissRecording = () => {
    clearKeysPressed();
  };

  const shareRecording = () => {
    // we share the recording trough a url that contains the keys pressed
    // we use the keys pressed to play the recording
    const url = new URL(window.location.href);
    // we add the keys pressed to the url as a query parameter called keysPressed as base64
    const keysPressedBase64 = btoa(keysPressed.join(','));
    url.searchParams.set('keysPressed', keysPressedBase64);
    navigator.clipboard.writeText(url.toString());
    // we alert the user that the url has been copied to the clipboard
    toast('Copied to clipboard!');
  };

  return (
    <div>
      <div className="flex gap-4 items-center">
        <h2 className="font-bold text-2xl">Record</h2>
        <button
          className={`${
            isRecording ? 'bg-red-500' : 'bg-green-400'
          } p-2 rounded-lg disabled:opacity-50`}
          onClick={handleClick}
          disabled={keysPressed.length > 0 && !isRecording}
        >
          {isRecording ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-player-stop-filled"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M17 4h-10a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3 -3v-10a3 3 0 0 0 -3 -3z"
                strokeWidth="0"
                fill="currentColor"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-player-record-filled"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M8 5.072a8 8 0 1 1 -3.995 7.213l-.005 -.285l.005 -.285a8 8 0 0 1 3.995 -6.643z"
                strokeWidth="0"
                fill="currentColor"
              ></path>
            </svg>
          )}
        </button>
        {keysPressed.length > 0 && !isRecording ? (
          <div className="flex gap-4 items-center">
            <button onClick={playRecording} className="">
              Play
            </button>
            <button onClick={saveRecording}>Save</button>
            <button onClick={dismissRecording}>Dismiss</button>
            <button onClick={shareRecording}>Share</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};
