import "./Button.scss";
import { Link } from "react-router-dom";

const AddButton = (props) => {
  return (

      <button className="button button__add" type="submit" onClick={props.action}>
        {props.children}
      </button>

  );
};

export default AddButton;
