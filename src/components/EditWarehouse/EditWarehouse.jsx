import React, { useState, useEffect } from "react";
import "./EditWarehouse.scss";
import TextField from "../FormComponents/TextField/TextField";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import { api } from "../../axios/axios";
import AddButton from "../Buttons/AddButton";
import  CancelButton  from "../Buttons/CancelButton";
import Card from "../Card/Card";
import { Link, useParams, useNavigate } from "react-router-dom";

const phoneNumberRegex = /^\+\d{1,3}\s\(\d{3}\)\s\d{3}-\d{4}$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const EditWarehouse = () => {
  const { warehouseID } = useParams();
  const navigate = useNavigate();
  const [warehouse_name, setWarehouseName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contact_name, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const [clickSubmit, setClickSubmit] = useState(false);

  const handleSubmit = async () => {
    setClickSubmit(true);

    // validate the form
    if (
      warehouse_name === "" ||
      address === "" ||
      city === "" ||
      country === "" ||
      contact_name === "" ||
      phone_number === "" ||
      email === "" ||
      !phoneNumberRegex.test(phone_number) ||
      !emailRegex.test(email)
    ) {
      console.log("Form is invalid");
      return;
    }

    try {
      const res = await api.put(`/warehouses/${warehouseID}`, {
        warehouse_name,
        address,
        city,
        country,
        contact_name,
        contact_position: position,
        contact_phone: phone_number,
        contact_email: email,
      });

      if (res.status === 200) {
        clearForm();
        setClickSubmit(false);
        navigate("/warehouses");
      }
    } catch (error) {
      console.log("handleSubmit error:", error);
    }
  };

  const clearForm = () => {
    setWarehouseName("");
    setAddress("");
    setCity("");
    setCountry("");
    setContactName("");
    setPosition("");
    setPhoneNumber("");
    setEmail("");
  };

  const getWarehouseWithId = async () => {
    try {
      const res = await api.get(`/warehouses/${warehouseID}`);
      if (res.status === 200) {
        const warehouseData = res.data[0];
        setWarehouseName(warehouseData.warehouse_name);
        setAddress(warehouseData.address);
        setCity(warehouseData.city);
        setCountry(warehouseData.country);
        setContactName(warehouseData.contact_name);
        setPosition(warehouseData.contact_position);
        setPhoneNumber(warehouseData.contact_phone);
        setEmail(warehouseData.contact_email);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getWarehouseWithId();
  }, []);

  return (
    <div className="addWarehouse">
      <Card>
        <div className="addWarehouse__header">
          <Link to="/warehouses">
            <img src={backArrow} alt="go_back" />
          </Link>
          <h1 className="addWarehouse__header--title">Edit Warehouse</h1>
        </div>

        <div className="addWarehouse__container">
          <div className="addWarehouse__column">
            <h2>Warehouse Details</h2>
            <div className="addWarehouse__textFields">
              <TextField
                label="Warehouse Name"
                value={warehouse_name}
                setValue={setWarehouseName}
                error={
                  clickSubmit && warehouse_name === ""
                    ? "Warehouse name is required"
                    : ""
                }
              />
              <TextField
                label="Street Address"
                value={address}
                setValue={setAddress}
                error={
                  clickSubmit && address === "" ? "Address is required" : ""
                }
              />
              <TextField
                label="City"
                value={city}
                setValue={setCity}
                error={clickSubmit && city === "" ? "City is required" : ""}
              />
              <TextField
                label="Country"
                value={country}
                setValue={setCountry}
                error={
                  clickSubmit && country === "" ? "Country is required" : ""
                } // if (clickSubmit && country === "") then return 'Country is required' else return "" (empty string
              />
            </div>
          </div>
          <div className="addWarehouse__divider"></div>
          <div className="addWarehouse__column">
            <h2>Contact Details</h2>
            <div className="addWarehouse__textFields">
              <TextField
                label="Contact Name"
                value={contact_name}
                setValue={setContactName}
                error={
                  clickSubmit && contact_name === ""
                    ? "Contact name is required"
                    : ""
                }
              />
              <TextField
                label="Position"
                value={position}
                setValue={setPosition}
                error={
                  clickSubmit && contact_name === ""
                    ? "Position is required"
                    : ""
                }
              />
              <TextField
                label="Phone Number"
                value={phone_number}
                setValue={setPhoneNumber}
                error={
                  clickSubmit &&
                  (phone_number === "" || !phoneNumberRegex.test(phone_number))
                    ? "Enter valid phone number"
                    : ""
                }
              />
              <TextField
                label="Email"
                value={email}
                setValue={setEmail}
                error={
                  clickSubmit && (email === "" || !emailRegex.test(email))
                    ? "Enter valid email"
                    : ""
                }
              />
            </div>
          </div>
        </div>
        <div className="addWarehouse__buttons">
          <CancelButton text="Cancel" link="/warehouses" />
          <AddButton action={handleSubmit}>Save</AddButton>
        </div>
      </Card>
    </div>
  );
};

export default EditWarehouse;
