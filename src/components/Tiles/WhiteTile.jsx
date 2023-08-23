import { useState } from 'react';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useKeyPress } from '../../hooks';
import { whiteKeySoundMap, playSound } from '../../utils';
import { useStore } from '../../store/store';
import { useMemo } from 'react';

export const WhiteTile = ({ keyName }) => {
  const tileRef = useRef(null);
  const [whiteTilePressed, setWhiteTilePressed] = useState(false);
  // handle keypress using useKeyPress hook
  const keyPressed = useKeyPress(keyName);

  const { setIsPlaying } = useStore((state) => state);

  const tileSound = new Audio(`/sounds/${whiteKeySoundMap[keyName]}`);

  const handleClick = () => {
    playSound(tileSound);
    setIsPlaying(true);
    setWhiteTilePressed(true);
    setTimeout(() => {
      setWhiteTilePressed(false);
      setIsPlaying(false);
    }, 100);
  };

  useEffect(() => {
    if (keyPressed) {
      playSound(tileSound);
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [keyPressed, setIsPlaying]);

  return (
    <button
      className={`w-[50px]  text-center capitalize border-2 border-gray-500 rounded-lg ${
        whiteTilePressed || keyPressed
          ? 'bg-gray-200 h-[195px]'
          : 'bg-white h-[200px]'
      }`}
      ref={tileRef}
      onClick={handleClick}
    >
      <div className="flex flex-col justify-end h-full select-none">
        <div>{keyName}</div>
      </div>
    </button>
  );
};

WhiteTile.propTypes = {
  keyName: PropTypes.string.isRequired,
};
