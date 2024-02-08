import React from "react";
import "./WarehouseTableMobile.scss";
import "./../TableHeading/TableHeading.scss";
import deleteIcon from "./../../assets/icons/delete_outline-24px.svg";
import editIcon from "./../../assets/icons/edit-24px.svg";

const WarehouseTableMobile = () => {
  return (
    <>
      <ul className="warehouseList__mobile__content">
        <li className="warehouseList__mobile__item">
          <div className="warehouseList__mobile__left">
            <h1 className="warehouseList__table__heading">Warehouse</h1>
            <a className="warehouseList__name">Manhattan</a>
            <h1 className="warehouseList__table__heading warehouseList__address">
              Address
            </h1>
            <span>2876 Street,Washington-USA</span>
            <img src={deleteIcon} className="warehouseList__delete__icon" />
          </div>
          <div className="warehouseList__mobile__right">
            <h1 className="warehouseList__table__heading">contact name</h1>
            <a>Pamela Aulja</a>
            <h1 className="warehouseList__table__heading warehouseList__contactinfo">
              Contact Information
            </h1>
            <span>1-900-000-0000</span>
            <span>pqw@gmail.com</span>
            <div className="warehouseList__edit__div">
              <img src={editIcon} className="warehouseList__edit__icon" />
            </div>
          </div>
        </li>
        <li className="warehouseList__mobile__item">
          <div className="warehouseList__mobile__left">
            <h1 className="warehouseList__table__heading">Warehouse</h1>
            <a className="warehouseList__name">Manhattan</a>
            <h1 className="warehouseList__table__heading warehouseList__address">
              Address
            </h1>
            <span>2876 Street,Washington-USA</span>
            <img src={deleteIcon} className="warehouseList__delete__icon" />
          </div>
          <div className="warehouseList__mobile__right">
            <h1 className="warehouseList__table__heading">contact name</h1>
            <a>Pamela Aulja</a>
            <h1 className="warehouseList__table__heading warehouseList__contactinfo">
              Contact Information
            </h1>
            <span>1-900-000-0000</span>
            <span>pqw@gmail.com</span>
            <div className="warehouseList__edit__div">
              <img src={editIcon} className="warehouseList__edit__icon" />
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default WarehouseTableMobile;
