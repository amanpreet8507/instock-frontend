import "../TableHeading/TableHeading";
import ItemButton from "../ItemButton/ItemButton";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import { Link } from "react-router-dom";
import "./DualTable.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import DeleteInventoryModal from "../DeleteModal/DeleteInventoryModal";
import { api } from "../../axios/axios";

const InventoryTable = ({
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
        const response = await api.get(
          `inventories/${id}`
        );
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
      <table className="table__warehouse">
        <tr className="table__row">
          <td className="table__data table__data-1" key={id}>
            <Link to={`/inventories/${id}`}>
              <ItemButton text={itemName} />
            </Link>
          </td>
          <td className="table__data table__data-middle table__data-item">
            {category}
          </td>
          <td className="table__data table__data-middle table__data-status table__data-item">
            {status}
          </td>
          <td className="table__data table__data-middle table__data-item">
            {warehouseName}
          </td>
          <td className="table__data table__data-middle table__data-item">
            {quantity}
          </td>
          <td className="table__data table__data-last">
            <img
              src={deleteIcon}
              onClick={() => handleDeleteModalOpen({ id, item_name: itemName })}
            />
            <Link to={`/inventories/${id}/edit`}>
              <img src={editIcon} />
            </Link>
          </td>
        </tr>
      </table>
      {deleteModal && (
        <DeleteInventoryModal
          onClose={handleDeleteModalClose}
          inventory={currentInventory}
        />
      )}
    </>
  );
};

export default InventoryTable;
