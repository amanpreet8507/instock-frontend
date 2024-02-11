import "./Button.scss";
import { Link } from "react-router-dom";

const AddButton = (props) => {
  return (
    <Link to={props.link} className="button__link">
      <button className="button button__add" onClick={props.action}>
        {props.children}
      </button>
    </Link>
  );
};

export default AddButton;
