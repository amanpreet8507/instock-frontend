import React, { useState } from "react";
import "./AddWarehouse.scss";
import TextField from "../FormComponents/TextField/TextField";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import { api } from "../../axios/axios";
import AddButton  from "../Buttons/AddButton";
import CancelButton  from "../Buttons/CancelButton";
import Card from "../Card/Card";
import {Link, useNavigate} from "react-router-dom"
import Header from "../Header/Header";

const phoneNumberRegex = /^\d{10}$/; 
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const AddWarehouse = ({ onCancel }) => {
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
      const res = await api.post("/warehouses", {
        warehouse_name,
        address,
        city,
        country,
        contact_name,
        contact_position: position,
        contact_phone: phone_number,
        contact_email: email,
      });

      if (res.status === 201) {
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

  return (
    <>
    <Header/>
      <main className="app__container">
    <div className="addWarehouse">
      <Card>
        <div className="addWarehouse__header">
          <Link to ="/warehouses">
          <img src={backArrow} alt="go_back" /></Link>
          <h1 className="addWarehouse__header--title">Add New Warehouse</h1>
        </div>

        <div className="addWarehouse__container">
          <div className="addWarehouse__column">
            <h2>Warehouse Details</h2>
            <div className="addWarehouse__textFields">
              <TextField
                label="Warehouse Name"
                value={warehouse_name}
                setValue={(e)=>setWarehouseName(e.target.value)}
                error={
                  clickSubmit && warehouse_name === ""
                    ? "Warehouse name is required"
                    : ""
                }
              />
              <TextField
                label="Street Address"
                value={address}
                setValue={(e)=>setAddress(e.target.value)}
                error={
                  clickSubmit && address === "" ? "Address is required" : ""
                }
              />
              <TextField
                label="City"
                value={city}
                setValue={(e)=>setCity(e.target.value)}
                error={clickSubmit && city === "" ? "City is required" : ""}
              />
              <TextField
                label="Country"
                value={country}
                setValue={(e)=>setCountry(e.target.value)}
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
                setValue={(e)=>setContactName(e.target.value)}
                error={
                  clickSubmit && contact_name === ""
                    ? "Contact name is required"
                    : ""
                }
              />
              <TextField
                label="Position"
                value={position}
                setValue={(e)=>setPosition(e.target.value)} error={
                  clickSubmit && contact_name === ""
                    ? "Position is required"
                    : ""
                }
              />
              <TextField
                label="Phone Number (Format : 1234567890 )"
                value={phone_number}
                setValue={(e)=>setPhoneNumber(e.target.value)}
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
                setValue={(e)=>setEmail(e.target.value)}
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
          <AddButton action={handleSubmit}>+ Add Warehouse</AddButton>
        </div>
      </Card>
    </div>
    </main>
    </>
  );
};

export default AddWarehouse;
