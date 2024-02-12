import { useState, useEffect } from "react";
import "./DualTable.scss";
import ItemButton from "../ItemButton/ItemButton";
import TableHeading from "../TableHeading/TableHeading";
import rightIcon from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import { Link } from "react-router-dom";
import { api } from "../../axios/axios";
import DeleteWarehouseModal from "../DeleteWarehouseModal/DeleteWarehouseModal";
import WarehouseTableHeadingRow from "../TableHeadingRow/WarehouseTableHeadingRow";
const WarehouseTable = ({ warehouseArr }) => {
  const [warehouseData, setWarehouseData] = useState([]); 
  const [deleteModal, setDeleteModal] = useState(false);
  const [currentWarehouse, setCurrentWarehouse] = useState(null);

  const handleDeleteModalClose = () => {
    currentWarehouse && setCurrentWarehouse(null);
    setDeleteModal(false);
  };
  const handleDeleteModalOpen = (warehouse) => {
    setCurrentWarehouse(warehouse);
    setDeleteModal(true);
  };
  const getAllWarehouses = async () => {
    try {
      const response = await api.get("/warehouses");
      setWarehouseData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllWarehouses();
  }, []);

  return (
    <>
      {/* Tablet/Desktop View */}
      <table className="table__warehouse">
        <WarehouseTableHeadingRow />
        {warehouseArr.map((warehouse) => (
          <tr className="table__row" key={warehouse.id}>
            <td className="table__data table__data-1">
              <Link to={`/warehouses/${warehouse.id}`} ><ItemButton text={warehouse.warehouse_name} /></Link>
            </td>
            <td className="table__data table__data-middle table__data-wh">{warehouse.address}</td>
            <td className="table__data table__data-middle table__data-wh">{warehouse.contact_name}</td>
            <td className="table__data table__data-middle table__data-wh">
              {warehouse.contact_phone}
              <br />
              {warehouse.contact_email}
            </td>
            <td className="table__data table__data-last">
              <img
                src={deleteIcon}
                onClick={() => handleDeleteModalOpen(warehouse)}
              />
              <Link to={`/warehouses/edit/${warehouse.id}`}>
                <img src={editIcon} />
              </Link>
            </td>
          </tr>
        ))}
      </table>
      {deleteModal && (
        <DeleteWarehouseModal
          onClose={handleDeleteModalClose}
          warehouse={currentWarehouse}
        />
      )}
    </>
  );
};

export default WarehouseTable;
