import { useEffect } from 'react';
import {
  QuackBoard,
  Recorder,
  Recordings,
  Title,
  ToggleSwitch,
} from '../components';
import { useStore } from '../store/store';

export const Quack = () => {
  const {
    isPlaying,
    keyPlayed,
    showChords,
    setShowChords,
    showControls,
    setShowControls,
  } = useStore((state) => state);

  useEffect(() => {
    // if mobile device, hide controls
    setShowControls(!/Mobi|Android/i.test(navigator.userAgent));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex-col items-center">
      <div className="relative mb-4">
        <Title text="QuackBoard" />
        {isPlaying || keyPlayed ? (
          <img
            src="/images/DuckQuack.avif"
            alt="duck"
            className="w-16 absolute bottom-9 md:bottom-16"
          />
        ) : (
          <img
            src="/images/Duck.avif"
            alt="duck"
            className="w-16 absolute bottom-9 md:bottom-16"
          />
        )}
      </div>
      <section className="flex flex-col gap-4 mb-4">
        <div className="flex flex-col gap-4 self-center">
          <div className="flex justify-between  items-center">
            <h2 className="font-bold text-2xl">Show Controls</h2>
            <ToggleSwitch checked={showControls} setChecked={setShowControls} />
          </div>

          <div className="flex justify-between items-center">
            <h2 className="font-bold text-2xl">Show Note Names</h2>
            <ToggleSwitch checked={showChords} setChecked={setShowChords} />
          </div>
          <QuackBoard />
        </div>
        <div className="mt-4 flex flex-col gap-4">
          <div>
            <Recorder />
          </div>
          <div>
            <Recordings />
          </div>
        </div>
      </section>
    </div>
  );
};
