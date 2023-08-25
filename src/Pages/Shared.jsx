import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { QuackBoard, Title } from '../components';
import { useStore } from '../store/store';
import { stringToObjectArray } from '../utils';
import { IconPlayerPlayFilled } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

export const Shared = () => {
  const {
    playRecordedKeys,
    isRecordingPlaying,
    setShowControls,
    setShowChords,
  } = useStore((state) => state);
  const [sharedSong, setSharedSong] = useState([]);
  // get query params from url using
  const { search } = useLocation();

  const useQuery = () => new URLSearchParams(search);

  const query = useQuery();

  useEffect(() => {
    // we hide the controls and chords
    setShowControls(false);
    setShowChords(false);
    // we get the keys pressed from the query params
    const keysPressed = query.get('keysPressed');
    // we decode the keys pressed from base64
    const decodedKeysPressed = atob(keysPressed);
    // we split the objects pressed by comma
    const decodedKeysPressedArray = stringToObjectArray(decodedKeysPressed);
    console.log(decodedKeysPressedArray);
    // we set the keys pressed to the state
    setSharedSong(decodedKeysPressedArray);
  }, []);

  const playSong = () => {
    playRecordedKeys(sharedSong);
  };

  return (
    <div className=" flex flex-col gap-4 justify-center items-center">
      <Title text="Shared Song" />
      <div className="flex justify-center">
        <QuackBoard />
      </div>
      <button
        className="flex bg-blue-400 p-2 rounded-lg disabled:opacity-50"
        onClick={playSong}
        disabled={isRecordingPlaying}
      >
        Play
        <IconPlayerPlayFilled size={24} />
      </button>
      <Link
        className="flex bg-yellow-300 p-2 rounded-lg disabled:opacity-50"
        to="/quack"
      >
        Go to QuackBoard
      </Link>
    </div>
  );
};
