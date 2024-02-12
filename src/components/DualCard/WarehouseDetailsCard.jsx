import "./DualCard.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import ItemButton from "../ItemButton/ItemButton";
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import DeleteWarehouseModal from "../DeleteWarehouseModal/DeleteWarehouseModal";
import axios from "axios";
import {api} from "../../axios/axios"

const WarehouseDetailsCard = ({ warehouseArr }) => {
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
      {/* Mobile Breakpoints */}
      {warehouseArr.map((warehouse) => (
        <div className="card">
          <div className="card__info-div">
            <div>
              <div className="card__inner-div">
                <h4 className="card__title">WAREHOUSE</h4>
                <Link to={`/warehouses/${warehouse.id}`}>
                  <ItemButton text={warehouse.warehouse_name} />{" "}
                </Link>
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
                  {" "}
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
              <img src={editIcon} />
            </Link>
          </div>
        </div>
      ))}
     {deleteModal && (
        <DeleteWarehouseModal
          onClose={handleDeleteModalClose}
          warehouse={currentWarehouse}
        />
      )}    </>
  );
};

export default WarehouseDetailsCard;
