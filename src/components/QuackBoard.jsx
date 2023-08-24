import { WhiteTile } from './Tiles/WhiteTile';
import { BlackTile } from './Tiles/BlackTile';

export const QuackBoard = () => {
  return (
    <div className="relative before:absolute before:-z-10 before:bg-black before:w-full before:h-full before:rounded-lg before:translate-x-2 before:translate-y-2 ">
      {/* Black tiles row */}
      <div className="flex gap-[25px] absolute left-[10.8%]">
        <BlackTile keyName="w" chord="C# D♭" />
        <BlackTile keyName="e" chord="D# E♭" />
      </div>
      <div className="flex gap-[25px] absolute left-[53.7%]">
        <BlackTile keyName="t" chord="F# G♭" />
        <BlackTile keyName="y" chord="G# A♭" />
        <BlackTile keyName="u" chord="A# B♭" />
      </div>
      {/* White tiles row */}
      <div className="flex">
        <WhiteTile keyName="a" chord="C" />
        <WhiteTile keyName="s" chord="D" />
        <WhiteTile keyName="d" chord="E" />
        <WhiteTile keyName="f" chord="F" />
        <WhiteTile keyName="g" chord="G" />
        <WhiteTile keyName="h" chord="A" />
        <WhiteTile keyName="j" chord="B" />
      </div>
    </div>
  );
};
