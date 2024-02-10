import './AddButton.scss'
import {Link} from "react-router-dom";

const AddButton = (props) => {
  return (
    <Link to={props.link} className="button__add-div">
      <p className="button__add-p">{props.text}</p>
    </Link>
  );
};

export default AddButton;
