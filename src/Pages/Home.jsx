import { Link } from 'react-router-dom';
import { FollowMouse, Title } from '../components';

export const Home = () => {
  return (
    <>
      <FollowMouse />
      <div className="relative select-none">
        <img
          src="/images/Duck.avif"
          alt="Duck"
          className="w-16 absolute bottom-9"
        />
        <Title textSize="text-8xl" />
      </div>
      <Link
        className="mt-4 font-bold drop-shadow-sm bg-yellow-300 rounded-lg p-2 hover:scale-110"
        to="/quack"
      >
        Quack!!!!
      </Link>
    </>
  );
};
