import "./DeleteModal.scss";
import closeImage from "../../assets/icons/close-24px.svg";

export const DeleteWarehouseModal = ({onClose}) => {
  return (
    <div className="deleteModal__container">
      <div className="deleteModal__content">
        <div className="deleteModal__close" onClick={onClose}>

        <img  src={closeImage} alt="delete" />
        </div>
        <h2>Delete Warehouse</h2>
        <p>Are you sure you want to delete this warehouse?</p>
        <div className="deleteModal__buttons">
          <button className="deleteModal__button_cancel" onClick={onClose}>Cancel</button>
          <button className="deleteModal__button_delete">Delete</button>
        </div>
      </div>
    </div>
  );
};
