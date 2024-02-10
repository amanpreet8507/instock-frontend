import './AddButton.scss'

const AddButton = (props) => {
  return (
    <button className="button__add-div">
      <p className="button__add-p">{props.text}</p>
    </button>
  );
};

export default AddButton;
