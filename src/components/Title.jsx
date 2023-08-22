import PropTypes from 'prop-types';

export const Title = ({ textSize }) => {
  return (
    <div className="flex">
      <h1
        className={`${
          textSize ? `${textSize}` : 'text-8xl'
        } font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-500`}
      >
        QuackBoard
      </h1>
    </div>
  );
};

Title.propTypes = {
  //
  textSize: PropTypes.oneOf([
    'text-xs',
    'text-sm',
    'text-base',
    'text-lg',
    'text-xl',
    'text-2xl',
    'text-3xl',
    'text-4xl',
    'text-5xl',
    'text-6xl',
    'text-7xl',
    'text-8xl',
  ]).isRequired,
};
