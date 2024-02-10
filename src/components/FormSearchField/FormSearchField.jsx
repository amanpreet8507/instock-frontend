import "./FormSearchField.scss";

const FormField = (props) => {
  return (
    <form className="form">
      <input className="form__input" placeholder={props.text}></input>     
    </form>
  );
};

export default FormField;
