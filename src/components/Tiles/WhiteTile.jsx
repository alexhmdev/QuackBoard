import { useState } from 'react';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export const WhiteTile = ({ keyName }) => {
  const tileRef = useRef(null);
  const [whiteTilePressed, setWhiteTilePressed] = useState(false);
  useEffect(() => {
    const tile = tileRef.current;
    const handleMouseDown = () => {
      setWhiteTilePressed(true);
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

  return (
    <div
      className={`w-[50px] h-[200px] text-center capitalize border-2 border-gray-500 rounded-lg ${
        whiteTilePressed ? 'bg-gray-200 h-[195px]' : 'bg-white'
      }`}
      ref={tileRef}
    >
      <div className="flex flex-col justify-end h-full select-none">
        <div>{keyName}</div>
      </div>
    </div>
  );
};

WhiteTile.propTypes = {
  keyName: PropTypes.string.isRequired,
};
