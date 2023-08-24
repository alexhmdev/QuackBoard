import { useEffect } from 'react';
import { QuackBoard, Title, ToggleSwitch } from '../components';
import { useStore } from '../store/store';

export const Quack = () => {
  const {
    isPlaying,
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
    <>
      <div className="relative mb-4">
        <Title />
        {isPlaying ? (
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
      <section className="flex flex-col gap-4">
        <div className="flex justify-between  items-center">
          <h2 className="font-bold text-2xl">Show Controls</h2>
          <ToggleSwitch checked={showControls} setChecked={setShowControls} />
        </div>

        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">Show Chords</h2>
          <ToggleSwitch checked={showChords} setChecked={setShowChords} />
        </div>

        <QuackBoard />
      </section>
    </>
  );
};
