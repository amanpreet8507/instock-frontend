import "./DualHeader.scss";
import AddButton from "../Buttons/AddButton";
import FormField from "../FormComponents/FormSearchField/FormSearchField";

const DualHeader = (props) => {
  return (
    <>
      <div className="dual-header">
        <h1 className="dual-header__h1">{props.pageAbout}</h1>
        <div className="dual-header__search-button">
          <FormField text={props.formFieldText} />
          <AddButton link={props.link}>{props.buttonText}</AddButton>
        </div>
      </div>
    </>
  );
};

export default DualHeader;
