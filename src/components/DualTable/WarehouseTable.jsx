import { useState, useEffect } from "react";
import "./DualTable.scss";
import ItemButton from "../ItemButton/ItemButton";
import TableHeading from "../TableHeading/TableHeading";
import rightIcon from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import { Link } from "react-router-dom";
import { api } from "../../axios/axios";
import {DeleteWarehouseModal} from "../DeleteWarehouseModal/DeleteWarehouseModal";

const WarehouseTable = () => {
  const [warehouseData, setWarehouseData] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);

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
              <img src={deleteIcon} className="table__data__delete__icon" onClick={() => setDeleteModal(true)} />
              <Link to={`/warehouses/edit/${warehouse.id}`}>
                <img src={editIcon} />
              </Link>
            </td>
          </tr>
        ))}
      </table>
     {deleteModal && <DeleteWarehouseModal />}
    </>
  );
};

export default WarehouseTable;
