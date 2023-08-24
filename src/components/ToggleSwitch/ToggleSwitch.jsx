import PropTypes from 'prop-types';
import './ToggleSwitch.css';

export const ToggleSwitch = ({ checked, setChecked }) => {
  return (
    <label className="switch">
      <input
        className="toggle"
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <span className="slider"></span>
      <span className="card-side"></span>
    </label>
  );
};

ToggleSwitch.propTypes = {
  checked: PropTypes.bool.isRequired,
  setChecked: PropTypes.func.isRequired,
};
