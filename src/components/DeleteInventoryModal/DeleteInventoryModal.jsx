import "./DeleteModal.scss";
import closeImage from "../../assets/icons/close-24px.svg";
import {api} from "../../axios/axios";

export const DeleteInventoryModal = ({ onClose, inventory }) => {

  const handleDelete= async () => {
    try {
      const res = await api.delete(`/inventories/${inventory.id}`)
      if (res.status === 204) {
        onClose()
        window.location.reload()
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="deleteModal__container">
      <div className="deleteModal__content">
        <div>

        <div className="deleteModal__close" onClick={onClose}>
          <img src={closeImage} alt="delete" />
        </div>
        <h2>Delete {inventory.inventory_name} inventory item?</h2>
        <p>
          Please confirm that you'd like to delete the {inventory.inventory_name} from the inventory list. You won't be able to undo this action.
        </p>
        </div>
        <div className="deleteModal__buttons">
          <button className="deleteModal__button_cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="deleteModal__button_delete" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};
