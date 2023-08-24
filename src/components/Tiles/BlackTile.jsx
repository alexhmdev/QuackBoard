import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { blackKeySoundMap, loadSound, playSound } from '../../utils';
import { useKeyPress } from '../../hooks';
import { useStore } from '../../store/store';

export const BlackTile = ({ keyName, chord }) => {
  const tileRef = useRef(null);
  const [blackTilePressed, setBlackTilePressed] = useState(false);
  const keyPressed = useKeyPress(keyName);

  const {
    setIsPlaying,
    showChords,
    showControls,
    keyPlayed,
    isRecording,
    isRecordingPlaying,
    recordKeysPressed,
  } = useStore((state) => state);

  useEffect(() => {
    loadSound(keyName, blackKeySoundMap[keyName]);
  }, [keyName]);

  const handleClick = () => {
    if (isRecording) {
      recordKeysPressed(keyName);
    }
    playSound(keyName);
    setIsPlaying(true);
    setBlackTilePressed(true);
    setTimeout(() => {
      setBlackTilePressed(false);
      setIsPlaying(false);
    }, 100);
  };

  useEffect(() => {
    if (keyPressed) {
      if (isRecording) {
        recordKeysPressed(keyName);
      }
      playSound(keyName);
      setBlackTilePressed(true);
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
      setBlackTilePressed(false);
    }
  }, [keyPressed, setIsPlaying, keyName]);

  return (
    <button
      className={`w-[25px] pb-1 text-white text-center capitalize border-2 border-gray-500 rounded-lg  ${
        blackTilePressed || keyPlayed === keyName
          ? 'h-[5.5rem] bg-[#222]'
          : 'h-24 bg-black'
      }`}
      ref={tileRef}
      onClick={handleClick}
      disabled={isRecordingPlaying}
    >
      <div className="flex flex-col justify-end h-full select-none">
        {showControls ? <div>({keyName})</div> : null}
        {showChords ? <div className="text-sm">{chord}</div> : null}
      </div>
    </button>
  );
};

BlackTile.propTypes = {
  keyName: PropTypes.string.isRequired,
  chord: PropTypes.string.isRequired,
};
