import "./DualHeader.scss";
import AddButton from "../Buttons/AddButton";
import FormSearchField from "../FormComponents/FormSearchField/FormSearchField"
import {Link} from "react-router-dom";
const DualHeader = (props) => {
  return (
    <>
      <div className="dual-header">
        <h1 className="dual-header__h1">{props.pageAbout}</h1>
        <div className="dual-header__search-button">
          <FormSearchField text={props.formFieldText} />
          <Link to ={props.link} className="button__link">
            <AddButton>{props.buttonText}</AddButton>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DualHeader;
