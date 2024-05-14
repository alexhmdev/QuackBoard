import { useRecordings } from '../store/recordingsStore';
import { useStore } from '../store/store';
import {
  IconPlayerRecordFilled,
  IconPlayerStopFilled,
  IconPlayerPlayFilled,
  IconDeviceFloppy,
  IconTrash,
  IconShare,
} from '@tabler/icons-react';
import toast from 'react-hot-toast';
import ReactGA from 'react-ga4';

export const Recorder = () => {
  const {
    isRecording,
    isRecordingPlaying,
    setIsRecording,
    playRecordedKeys,
    clearKeysPressed,
    keysPressed,
  } = useStore((state) => state);
  const { addRecording } = useRecordings((state) => state);

  const handleClick = () => {
    setIsRecording(!isRecording);
    ReactGA.event({
      category: 'Recorder',
      action: 'Record',
      label: isRecording ? 'Stop' : 'Start',
    });
  };

  const playRecording = () => {
    playRecordedKeys(keysPressed);
    ReactGA.event({
      category: 'Recorder',
      action: 'Play',
    });
  };

  const saveRecording = () => {
    addRecording({
      keysPressed,
      name: `${Date.now()}.quack`,
    });
    clearKeysPressed();
    toast('Recording saved!');
    ReactGA.event({
      category: 'Recorder',
      action: 'Save',
    });
  };

  const dismissRecording = () => {
    clearKeysPressed();
  };

  const shareRecording = () => {
    // we share the recording trough a url that contains the keys pressed
    // we use the keys pressed to play the recording
    // /shared?keysPressed=base64
    const url = new URL(window.location.origin + '/shared');
    // we add the keys pressed to the url as a query parameter called keysPressed as base64
    // we parse to string the keys pressed and we join them with a comma
    const keysPressedBase64 = btoa(
      keysPressed.map((k) => JSON.stringify(k)).join(',')
    );
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
            <IconPlayerStopFilled size={24} />
          ) : (
            <IconPlayerRecordFilled size={24} />
          )}
        </button>
        {keysPressed.length > 0 && !isRecording ? (
          <div className="md:flex grid grid-cols-2 gap-4 items-center">
            <button
              onClick={playRecording}
              className="flex gap-1 bg-blue-500 p-2 rounded-lg disabled:opacity-50"
              disabled={isRecordingPlaying}
            >
              Play
              <IconPlayerPlayFilled size={24} />
            </button>
            <button
              onClick={saveRecording}
              className="flex gap-1 bg-green-400 p-2 rounded-lg"
            >
              Save
              <IconDeviceFloppy size={24} />
            </button>
            <button
              onClick={dismissRecording}
              className="flex gap-1 bg-red-500 p-2 rounded-lg"
            >
              Dismiss
              <IconTrash size={24} />
            </button>
            <button
              onClick={shareRecording}
              className="flex gap-1 bg-blue-400 p-2 rounded-lg"
            >
              Share
              <IconShare size={24} />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};
