import { WhiteTile } from './Tiles/WhiteTile';
import { BlackTile } from './Tiles/BlackTile';

export const QuackBoard = () => {
  // quick piano using tailwindcss and react
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="flex">
        <WhiteTile />
        <BlackTile />
        <WhiteTile />
        <BlackTile />
        <WhiteTile />
        <WhiteTile />
        <BlackTile />
        <WhiteTile />
        <BlackTile />
        <WhiteTile />
        <BlackTile />
        <WhiteTile />
        <BlackTile />
        <WhiteTile />
        <WhiteTile />
        <BlackTile />
        <WhiteTile />
      </div>
    </div>
  );
};
