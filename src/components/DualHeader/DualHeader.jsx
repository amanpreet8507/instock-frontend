import "./DualHeader.scss";
import AddButton from "../AddButton/AddButton";
import FormField from "../FormSearchField/FormSearchField";

const DualHeader = (props) => {
  return (
    <>
      <div className="dual-header">
        <h1 className="dual-header__h1">{props.pageAbout}</h1>
        <div className="dual-header__search-button">
          <FormField text={props.formFieldText} />
          <AddButton text={props.buttonText} link={props.link}/>
        </div>
      </div>
    </>
  );
};

export default DualHeader;
