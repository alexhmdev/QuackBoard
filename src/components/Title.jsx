import PropTypes from 'prop-types';

export const Title = ({ textSize }) => {
  return (
    <div className="flex">
      <h1
        className={`${textSize} font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-500`}
      >
        QuackBoard
      </h1>
    </div>
  );
};

Title.propTypes = {
  textSize: PropTypes.string.isRequired,
};
