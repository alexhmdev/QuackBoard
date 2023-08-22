import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

export const BlackTile = ({ keyName }) => {
  const tileRef = useRef(null);
  const [blackTilePressed, setBlackTilePressed] = useState(false);
  useEffect(() => {
    const tile = tileRef.current;
    console.log(tile.classList.add);
    const handleMouseDown = () => {
      setBlackTilePressed(true);
    };
    const handleMouseUp = () => {
      setBlackTilePressed(false);
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
      className={`w-[25px] text-white text-center capitalize border-2 border-gray-500 rounded-lg  ${
        blackTilePressed ? 'h-[5.5rem] bg-[#222]' : 'h-24 bg-black'
      }`}
      ref={tileRef}
    >
      <div className="flex flex-col justify-center h-full select-none">
        <div>{keyName}</div>
      </div>
    </div>
  );
};

BlackTile.propTypes = {
  keyName: PropTypes.string.isRequired,
};
