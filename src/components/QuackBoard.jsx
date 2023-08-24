import { WhiteTile } from './Tiles/WhiteTile';
import { BlackTile } from './Tiles/BlackTile';

export const QuackBoard = () => {
  return (
    <div className="relative before:absolute before:-z-10 before:bg-black before:w-full before:h-full before:rounded-lg before:translate-x-2 before:translate-y-2 ">
      {/* Black tiles row */}
      <div className="flex gap-[25px] absolute left-[10.8%]">
        <BlackTile keyName="w" chord="" />
        <BlackTile keyName="e" />
      </div>
      <div className="flex gap-[25px] absolute left-[53.7%]">
        <BlackTile keyName="t" />
        <BlackTile keyName="y" />
        <BlackTile keyName="u" />
      </div>
      {/* White tiles row */}
      <div className="flex">
        <WhiteTile keyName="a" />
        <WhiteTile keyName="s" />
        <WhiteTile keyName="d" />
        <WhiteTile keyName="f" />
        <WhiteTile keyName="g" />
        <WhiteTile keyName="h" />
        <WhiteTile keyName="j" />
      </div>
    </div>
  );
};
