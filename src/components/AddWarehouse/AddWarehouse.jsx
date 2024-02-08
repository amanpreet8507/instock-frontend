import React from "react";
import "./AddWarehouse.scss";
import TextField from "../TextField/TextField"
import backArrow from "../../assets/icons/arrow_back-24px.svg";

const AddWarehouse = ({onCancel}) => {
  return (
    <div className="addWarehouse">
      <div className="addWarehouse__header">
        <img src={backArrow} onClick={onCancel}/>
        <p>Add New Warehouse</p>
      </div>
      <div className="column addWarehouse__container">
        <h2>Warehouse Details</h2>
        <div className="column addWarehouse__textFields">
            <TextField label="Warehouse Name"/>
            <TextField label="Street Address"/>
            <TextField label="City"/>
            <TextField label="Country"/>
        </div>
      </div>
      <div className="column addWarehouse__container">
        <h2>Contact Details</h2>
        <div className="column addWarehouse__textFields">
            <TextField label="Contact Name"/>
            <TextField label="Position"/>
            <TextField label="Phone Number"/>
            <TextField label="Email"/>
        </div>
      </div>
      <div className="addWarehouse__buttons">
        <button onClick={onCancel} className="addWarehouse__cancelBtn">Cancel</button>
        <button className="addWarehouse__addBtn">+Add Warehouse</button>
      </div>
    </div>
  );
};

export default AddWarehouse;
