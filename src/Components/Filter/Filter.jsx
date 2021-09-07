import PropTypes from "prop-types";
import s from "./Filter.module.css";
import { v4 as uuidv4 } from "uuid";

function Filter({ onChange }) {
  return (
    <label className={s.label} htmlFor={uuidv4()}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        onChange={onChange}
        name="filter"
        required
      />
    </label>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func,
};

export default Filter;
