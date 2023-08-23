import { QuackBoard, Title } from '../components';
import { useStore } from '../store/store';

export const Quack = () => {
  const { isPlaying } = useStore((state) => state);
  return (
    <>
      <div className="relative">
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
      <QuackBoard />
    </>
  );
};
