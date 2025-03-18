import "./Button.scss";

const AddButton = ({ action = () => {}, children }) => {
  return (

      <button className="button button__add" type="submit" onClick={action}>
        {children}
      </button>

  );
};

export default AddButton;
