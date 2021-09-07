import PropTypes from "prop-types";
import s from "./Button.module.css";
function Button({ type, buttonName, handleClick, id }) {
  return (
    <button className={s.button} onClick={handleClick} id={id} type={type}>
      {buttonName}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  buttonName: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
