import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { blackKeySoundMap, playSound } from '../../utils';
import { useKeyPress } from '../../hooks';
import { useStore } from '../../store/store';
import { useMemo } from 'react';

export const BlackTile = ({ keyName }) => {
  const tileRef = useRef(null);
  const [blackTilePressed, setBlackTilePressed] = useState(false);
  const keyPressed = useKeyPress(keyName);

  const { setIsPlaying } = useStore((state) => state);

  // use useMemo to memoize the tileSound
  const tileSound = new Audio(`/sounds/${blackKeySoundMap[keyName]}`);

  const handleClick = () => {
    playSound(tileSound);
    setIsPlaying(true);
    setBlackTilePressed(true);
    setTimeout(() => {
      setBlackTilePressed(false);
      setIsPlaying(false);
    }, 100);
  };

  useEffect(() => {
    if (keyPressed) {
      playSound(tileSound);
      setBlackTilePressed(true);
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
      setBlackTilePressed(false);
    }
  }, [keyPressed, setIsPlaying]);

  return (
    <button
      className={`w-[25px] text-white text-center capitalize border-2 border-gray-500 rounded-lg  ${
        blackTilePressed ? 'h-[5.5rem] bg-[#222]' : 'h-24 bg-black'
      }`}
      ref={tileRef}
      onClick={handleClick}
    >
      <div className="flex flex-col justify-center h-full select-none">
        <div>{keyName}</div>
      </div>
    </button>
  );
};

BlackTile.propTypes = {
  keyName: PropTypes.string.isRequired,
};
