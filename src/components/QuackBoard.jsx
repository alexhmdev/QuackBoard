import { WhiteTile } from './Tiles/WhiteTile';
import { BlackTile } from './Tiles/BlackTile';

export const QuackBoard = () => {
  return (
    <div className="relative">
      {/* Black tiles row */}
      <div className="flex gap-[25px] absolute left-[50%] -translate-x-[50%]">
        <BlackTile keyName="w" />
        <BlackTile keyName="e" />
        <BlackTile keyName="r" />
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
