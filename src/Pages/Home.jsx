import { Link } from 'react-router-dom';
import { Title } from '../components';
import { IconBrandGithubFilled } from '@tabler/icons-react';

export const Home = () => {
  return (
    <>
      <div className="relative select-none">
        <img
          src="/images/Duck.avif"
          alt="Duck"
          className="w-16 absolute bottom-9"
        />
        <Title textSize="text-8xl" text="QuackBoard" />
      </div>
      <div className="flex flex-col gap-4">
        <Link
          className="mt-4 text-2xl font-bold drop-shadow-sm bg-yellow-300 rounded-lg p-2 hover:scale-110"
          to="/quack"
        >
          Quack!!!!
        </Link>
        <Link
          className="flex items-center justify-between mt-4 text-2xl font-bold drop-shadow-sm bg-gray-300 rounded-lg p-2 hover:scale-110"
          to="https://github.com/alexhmdev/quackboard"
        >
          Github
          <IconBrandGithubFilled size={24} />
        </Link>
      </div>
    </>
  );
};
