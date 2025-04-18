import "./DeleteModal.scss";
import closeImage from "../../assets/icons/close-24px.svg";
import { api } from "../../axios/axios";
import PropTypes from 'prop-types';

const DeleteWarehouseModal = ({ onClose, warehouse }) => {
  const handleDelete = async () => {
     console.log('warehouse: ',warehouse)
    try {
      const res = await api.delete(`/warehouses/${warehouse.id}`);
      if (res.status === 204) {
        onClose();
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="deleteModal__container">
      <div className="deleteModal__content">
        <div>
          <div className="deleteModal__close" onClick={onClose}>
            <img src={closeImage} alt="delete" />
          </div>
          <h1>Delete {warehouse?.warehouse_name || "this"} warehouse?</h1>
          <p>
            Please confirm that you'd like to delete the{" "}
            {warehouse.warehouse_name || "selected warehouse "} from the list of warehouses. You won't be
            able to undo this action.
          </p>
        </div>
        <div className="deleteModal__buttons">
          <button className="deleteModal__button_cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="deleteModal__button_delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

DeleteWarehouseModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  warehouse: PropTypes.shape({
    id: PropTypes.string,
    warehouse_name: PropTypes.string,
  }),
};

export default DeleteWarehouseModal