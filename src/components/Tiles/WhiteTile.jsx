import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useKeyPress } from '../../hooks';
import { whiteKeySoundMap, playSound, loadSound } from '../../utils';
import { useStore } from '../../store/store';

export const WhiteTile = ({ keyName, chord }) => {
  const tileRef = useRef(null);
  const [whiteTilePressed, setWhiteTilePressed] = useState(false);
  // handle keypress using useKeyPress hook
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
    loadSound(keyName, whiteKeySoundMap[keyName]);
  }, [keyName]);

  const handleClick = () => {
    if (isRecording) {
      recordKeysPressed(keyName);
    }
    playSound(keyName);
    setIsPlaying(true);
    setWhiteTilePressed(true);
    setTimeout(() => {
      setWhiteTilePressed(false);
      setIsPlaying(false);
    }, 100);
  };

  useEffect(() => {
    if (keyPressed) {
      if (isRecording) {
        recordKeysPressed(keyName);
      }
      playSound(keyName);
      setIsPlaying(true);
      setWhiteTilePressed(true);
    } else {
      setIsPlaying(false);
      setWhiteTilePressed(false);
    }
  }, [keyPressed, setIsPlaying, keyName]);

  return (
    <button
      className={`w-[50px]  text-center capitalize border-2 border-gray-500 rounded-lg ${
        whiteTilePressed || keyPlayed === keyName
          ? 'bg-gray-200 h-[195px]'
          : 'bg-white h-[200px]'
      }`}
      ref={tileRef}
      onClick={handleClick}
      disabled={isRecordingPlaying}
    >
      <div className="flex flex-col justify-end h-full select-none">
        {showChords ? <div className="text-sm">{chord}</div> : null}
        {showControls ? <div>({keyName})</div> : null}
      </div>
    </button>
  );
};

WhiteTile.propTypes = {
  keyName: PropTypes.string.isRequired,
  chord: PropTypes.string.isRequired,
};
