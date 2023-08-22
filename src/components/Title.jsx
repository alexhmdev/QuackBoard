import PropTypes from 'prop-types';

export const Title = ({ textSize }) => {
  return (
    <div className="flex">
      <h1
        className={`text-${textSize} font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-500`}
      >
        QuackBoard
      </h1>
    </div>
  );
};

Title.propTypes = {
  //
  textSize: PropTypes.oneOf([
    'xs',
    'sm',
    'base',
    'lg',
    'xl',
    '2xl',
    '3xl',
    '4xl',
    '5xl',
    '6xl',
    '7xl',
    '8xl',
  ]).isRequired,
};
