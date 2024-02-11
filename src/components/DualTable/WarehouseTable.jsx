import { useState, useEffect } from "react";
import "./DualTable.scss";
import ItemButton from "../ItemButton/ItemButton";
import TableHeading from "../TableHeading/TableHeading";
import rightIcon from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import { Link } from "react-router-dom";
import { api } from "../../axios/axios";
import { DeleteWarehouseModal } from "../DeleteWarehouseModal/DeleteWarehouseModal";

const WarehouseTable = () => {
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
        <tr className="table__row table__heading-row">
          <TableHeading text="WAREHOUSE" />
          <TableHeading text="ADDRESS" />
          <TableHeading text="CONTACT NAME" />
          <TableHeading
            text="CONTACT INFORMATION"
            className="CONTACT INFORMATION"
          />
          <th className="table__heading">ACTIONS</th>
        </tr>
        {warehouseData.map((warehouse) => (
          <tr className="table__row" key={warehouse.id}>
            <td className="table__data table__warehouse__col-1">
              <ItemButton text={warehouse.warehouse_name} />
            </td>
            <td className="table__data">{warehouse.address}</td>
            <td className="table__data">{warehouse.contact_name}</td>
            <td className="table__data">
              {warehouse.contact_phone}
              <br />
              {warehouse.contact_email}
            </td>
            <td className="table__data table__warehouse__actions">
              <img
                src={deleteIcon}
                className="table__data__delete__icon"
                onClick={() => handleDeleteModalOpen(warehouse)}
              />
              <Link to={`/warehouses/edit/${warehouse.id}`}>
                <img src={editIcon} />
              </Link>
            </td>
          </tr>
        ))}
      </table>

      {/* Mobile View - Copied from WarehouseDetailsCard.jsx and we will no longer need that component */}
      {warehouseData.map((warehouse) => (
        <div className="card" key={warehouse.id}>
          <div className="card__info-div">
            <div>
              <div className="card__inner-div">
                <h4 className="card__title">WAREHOUSE</h4>
                <ItemButton text={warehouse.warehouse_name} />
              </div>
              <div className="card__inner-div">
                <h4 className="card__title card__h4">ADDRESS</h4>
                <p className="card__inner-details">{warehouse.address}</p>
              </div>
            </div>
            <div>
              <div className="card__inner-div">
                <h4 className="card__title">CONTACT NAME</h4>
                <p className="card__inner-details">
                  {" "}
                  {warehouse.contact_name}{" "}
                </p>
              </div>
              <div className="card__inner-div">
                <h4 className="card__title card__contact card__h4">
                  CONTACT INFORMATION
                </h4>
                <p className="card__inner-details card__phone-email">
                  {warehouse.contact_phone}
                </p>
                <p className="card__inner-details card__phone-email">
                  {warehouse.contact_email}
                </p>
              </div>
            </div>
          </div>
          <div className="card__icons">
            <img
              src={deleteIcon}
              className="table__data__delete__icon"
              onClick={() => handleDeleteModalOpen(warehouse)}
            />
              <Link to={`/warehouses/edit/${warehouse.id}`}>
            <img src={editIcon}></img>
            </Link>
          </div>
        </div>
      ))}

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
