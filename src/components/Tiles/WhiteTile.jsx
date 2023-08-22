import { useState } from 'react';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useKeyPress } from '../../hooks';
import { whiteKeySound } from '../../utils/keySoundMap';

export const WhiteTile = ({ keyName }) => {
  const tileRef = useRef(null);
  const tileSoundRef = useRef(null);

  const [whiteTilePressed, setWhiteTilePressed] = useState(false);

  // handle keypress using useKeyPress hook
  const keyPressed = useKeyPress(keyName);

  useEffect(() => {
    const tile = tileRef.current;
    const handleMouseDown = () => {
      setWhiteTilePressed(true);
      tileSoundRef.current.play();
      tileSoundRef.current.currentTime = 0;
    };
    const handleMouseUp = () => {
      setWhiteTilePressed(false);
    };
    tile.addEventListener('mousedown', handleMouseDown);
    tile.addEventListener('mouseup', handleMouseUp);
    tile.addEventListener('mouseleave', handleMouseUp);
    return () => {
      tile.removeEventListener('mousedown', handleMouseDown);
      tile.removeEventListener('mouseup', handleMouseUp);
      tile.removeEventListener('mouseleave', handleMouseUp);
    };
  }, []);

  useEffect(() => {
    if (keyPressed) {
      tileSoundRef.current.play();
      // to let the user play it multiple times
      tileSoundRef.current.currentTime = 0;
    }
  }, [keyPressed]);

  return (
    <div
      className={`w-[50px]  text-center capitalize border-2 border-gray-500 rounded-lg ${
        whiteTilePressed || keyPressed
          ? 'bg-gray-200 h-[195px]'
          : 'bg-white h-[200px]'
      }`}
      ref={tileRef}
    >
      <audio
        src={`/sounds/${whiteKeySound[keyName]}`}
        ref={tileSoundRef}
      ></audio>
      <div className="flex flex-col justify-end h-full select-none">
        <div>{keyName}</div>
      </div>
    </div>
  );
};

WhiteTile.propTypes = {
  keyName: PropTypes.string.isRequired,
};
