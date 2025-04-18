import "./DualCard.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import ItemButton from "../ItemButton/ItemButton";
import InStockStatus from "../InStockStatus/InStockStatus";
import OutOfStockStatus from "../OutOfStockStatus/OutOfStockStatus";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DeleteInventoryModal from "../DeleteModal/DeleteInventoryModal";
import { api } from "../../axios/axios";

const InventoryItemCard = ({
  id,
  category,
  itemName,
  status,
  quantity,
  warehouseId,
}) => {
  const [warehouseName, setWarehouseName] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  const [currentInventory, setCurrentInventory] = useState(null);

  const handleDeleteModalClose = () => {
    currentInventory && setCurrentInventory(null);
    setDeleteModal(false);
  };

  const handleDeleteModalOpen = (inventory) => {
    if (!inventory) return;

    // Ensure warehouse_name is included (fetch if needed)
    const updatedInventory = {
      ...inventory,
      warehouse_name: warehouseName || "Unknown Warehouse", // Provide fallback
    };

    setCurrentInventory(updatedInventory);
    setDeleteModal(true);
  };

  useEffect(() => {
    const fetchWarehouseName = async () => {
      try {
        const response = await api.get(`inventories/${id}`);
        setWarehouseName(response.data.warehouse_name);
        setCurrentInventory(response.data);
      } catch (error) {
        console.error("Error fetching warehouse name:", error);
      }
    };

    fetchWarehouseName();
  }, [id]);

  return (
    <>
      {/* Mobile Breakpoints */}
      <div className="card">
        <div className="card__info-div">
          <div>
            <div className="card__inner-div">
              <h4 className="card__title">INVENTORY NAME</h4>
              <Link to={`/inventories/${id}`}>
                <ItemButton text={itemName} className="card__inner-details" />
              </Link>
            </div>
            <div className="card__inner-div">
              <h4 className="card__title card__h4">CATEGORY</h4>
              <p className="card__inner-details">{category}</p>
            </div>
          </div>
          <div>
            <div className="card__inner-div card__status-qty">
              <h4 className="card__title">STATUS</h4>
              <div className="card__inner-details">{status}</div>
            </div>
            <div className="card__inner-div">
              <h4 className="card__title card__h4">QTY</h4>
              <p className="card__inner-details">{quantity}</p>
            </div>
            <div className="card__inner-div">
              <h4 className="card__title card__h4">WAREHOUSE</h4>
              <p className="card__inner-details">{warehouseName}</p>
            </div>
          </div>
        </div>
        <div className="card__icons">
          <img
            src={deleteIcon}
            onClick={() => handleDeleteModalOpen({ id, item_name: itemName })}
          />
          <Link to={`/inventories/${id}/edit`}>
            <img src={editIcon} />
          </Link>
        </div>
      </div>
      {deleteModal && (
        <DeleteInventoryModal
          onClose={handleDeleteModalClose}
          inventory={currentInventory}
        />
      )}
      {/* Tablet and desktop breakpoints */}
    </>
  );
};

export default InventoryItemCard;
