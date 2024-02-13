import "../TableHeading/TableHeading";
import ItemButton from "../ItemButton/ItemButton";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import { Link, useParams } from "react-router-dom";
import "./DualTable.scss";
import { useEffect, useState } from "react";
import DeleteWarehouseModal from "../DeleteModal/DeleteWarehouseModal";
import axios from "axios";

const InventoryTable = ({ id, category, itemName, status, quantity, warehouseId }) => {
  //const { id } = useParams();
  const [warehouseName, setWarehouseName] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  const [currentInventory, setCurrentInventory] = useState(null);

  const handleDeleteModalClose = () => {
    currentInventory && setCurrentInventory(null);
    setDeleteModal(false);
  };

  const handleDeleteModalOpen = (inventory) => {
    setCurrentInventory(inventory);
    setDeleteModal(true);
  };

  useEffect(() => {
    const fetchWarehouseName = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/inventories/${id}`);
        setWarehouseName(response.data.warehouse_name);
      } catch (error) {
        console.error("Error fetching warehouse name:", error);
      }
    };

    fetchWarehouseName();
  }, [warehouseId]);

  return (
    <>
      <table className="table__warehouse">
        <tr className="table__row">
          <td className="table__data table__data-1">
            <Link to={`/inventories/${id}`}>
              <ItemButton text={itemName} />
            </Link>
          </td>
          <td className="table__data table__data-middle table__data-item">{category}</td>
          <td className="table__data table__data-middle table__data-status table__data-item">{status}</td>
          <td className="table__data table__data-middle table__data-item">{warehouseName}</td>
          <td className="table__data table__data-middle table__data-item">{quantity}</td>
          <td className="table__data table__data-last">
            <img src={deleteIcon} onClick={() => handleDeleteModalOpen(warehouseId)} />
            <Link to={`/inventories/${id}/edit`}>
              <img src={editIcon} />
            </Link>
          </td>
        </tr>
      </table>
      {deleteModal && (
        <DeleteWarehouseModal onClose={handleDeleteModalClose} inventory={currentInventory} />
      )}
    </>
  );
};

export default InventoryTable;
