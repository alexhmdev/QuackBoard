import { useStore } from '../store/store';
import { useRecordings } from '../store/recordingsStore';
import {
  IconPlayerPlayFilled,
  IconTrash,
  IconShare,
  IconCaretDownFilled,
  IconCaretUpFilled,
} from '@tabler/icons-react';
import toast from 'react-hot-toast';
import { useState } from 'react';

export const Recordings = () => {
  const [showRecordings, setShowRecordings] = useState(false);
  const { recordings, removeRecording } = useRecordings((state) => state);
  const { playRecordedKeys, isRecordingPlaying } = useStore((state) => state);

  const playRecording = (keysPressed) => {
    playRecordedKeys(keysPressed);
  };

  const confirmDelete = (name) => {
    toast(
      (t) => (
        <div className="flex items-center gap-2">
          <span>Are you sure?</span>
          <button
            className="bg-red-500 rounded-lg p-2"
            onClick={() => {
              removeRecording(name);
              toast.dismiss(t.id);
            }}
          >
            <IconTrash size={24} />
          </button>
          <button
            className="bg-green-500 rounded-lg p-2"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      ),
      {
        duration: 5000,
      }
    );
  };

  const shareRecording = (keysPressed) => {
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

  const toggleRecordings = () => {
    setShowRecordings(!showRecordings);
  };

  return (
    <div>
      <div>
        {recordings.length > 0 ? (
          <button onClick={toggleRecordings} className="flex items-center">
            <h2 className="font-bold text-2xl">Recordings</h2>
            {showRecordings ? (
              <IconCaretUpFilled size={24} />
            ) : (
              <IconCaretDownFilled size={24} />
            )}
          </button>
        ) : null}
        <div
          className={`h-[200px] md:h-[200px] overflow-x-auto flex flex-col gap-2 ${
            showRecordings ? 'block' : 'hidden'
          }`}
        >
          {recordings.map((recording) => (
            <div
              key={JSON.stringify(recording.keysPressed)}
              className="flex items-center"
            >
              <div className="flex-1">
                <span>
                  {recording.name.length > 20
                    ? recording.name.substring(3)
                    : recording.name}
                </span>
              </div>
              <div className="flex gap-4">
                <button
                  className="bg-blue-500 rounded-lg p-2 disabled:opacity-50"
                  onClick={() => playRecording(recording.keysPressed)}
                  disabled={isRecordingPlaying}
                >
                  <IconPlayerPlayFilled size={24} />
                </button>
                <button
                  className="bg-red-500 rounded-lg p-2"
                  onClick={() => confirmDelete(recording.name)}
                >
                  <IconTrash size={24} />
                </button>
                <button
                  className="bg-blue-400 rounded-lg p-2"
                  onClick={() => shareRecording(recording.keysPressed)}
                >
                  <IconShare size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
