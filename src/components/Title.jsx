import PropTypes from 'prop-types';

export const Title = ({ text }) => {
  return (
    <div className="flex">
      <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-500 text-6xl md:text-8xl">
        {text}
      </h1>
    </div>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
