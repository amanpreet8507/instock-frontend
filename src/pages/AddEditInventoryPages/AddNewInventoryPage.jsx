import React, { useEffect, useState } from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import TextField from "../../components/FormComponents/TextField/TextField";
import FormTextarea from "../../components/FormComponents/FormTextarea/FormTextarea";
import FormDropdown from "../../components/FormComponents/FormDropdown";
import RadioButtonSelection from "../../components/FormComponents/RadioButtonSelection/RadioButtonSelection";
import AddButton from "../../components/Buttons/AddButton";
import CancelButton from "../../components/Buttons/CancelButton";
import Card from "../../components/Card/Card";
import {Link} from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddNewInventoryPage = () => {
  const categoryOptions = [
    "Electronics",
    "Apparel",
    "Accessories",
    "Health",
    "Gear",
    "Accessories",
  ];
  const warehouseOptions = [
    "Brooklyn",
    "Washington",
    "Jersey",
    "SF",
    "Santa Monica",
    "Seattle",
    "Miami",
    "Boston",
    "Chicago",
  ];
  const navigate = useNavigate(); 
  const [showForm, setShowForm] = useState(false);
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("In Stock");
  const [category, setCategory] = useState("");
  const [warehouse, setWarehouse] = useState("");
  const [quantity, setQuantity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    if (e.target.value === "Out of Stock") {
      setQuantity("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Front-end validation
    if (
      !itemName ||
      !description ||
      !status ||
      !category ||
      !warehouse ||
      (status === "In Stock" && !quantity)
    ) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }
    const  createOBJ = {
      "warehouse_id": warehouse,
      "description": description,
      "status": status,
      "category": category,
      "quantity": quantity,
      "item_name": itemName,

    } 
    const newItem = { itemName, description, status, category, quantity, warehouse };

    try {
      const response = await axios.post("/inventories", newItem);
      const data = response.data
      console.log(response.data)

      return data;

    } catch (error) {
      console.error("Error while posting item", error);
    }

    // Clear form fields and hide form after successful submission
    setItemName("");
    setDescription("");
    setStatus("");
    setCategory("Select...");
    setQuantity("");
    setWarehouse("")
    setShowForm(false);
    setErrorMessage("");
  };

  return (
    <Card>
      <div className="main__header-div">
        <MainHeader headerTitle="Add New Inventory Item" />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="main__body-container">
          <div className="main__body">
            <h2 className="main__h2">Item Details</h2>
            <TextField
              label="Item Name"
              value={itemName}
              setValue={(e) => setItemName(e.target.value)}
              required
            />
            <FormTextarea
              label="Description"
              value={description}
              setValue={(e) => setDescription(e.target.value)}
              required
            />
            <FormDropdown
              label="Category"
              options={categoryOptions}
              value={category}
              setValue={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="main__body main__body-right">
            <h2 className="main__h2">Item Availability</h2>
            <RadioButtonSelection
              checked={status}
              setValue={handleStatusChange}
            />

            {status === "In Stock" && (
              <TextField
                label="Quantity"
                value={quantity}
                setValue={(e) => setQuantity(e.target.value)}
              />
            )}
           <FormDropdown
              label="Warehouse"
              options={warehouseOptions}
              value={warehouse}
              setValue={(e) =>
                setWarehouse(e.target.value)
              }
            />
          </div>
        </div>
        <div className="main__button-div">
          <div className="main__buttons">
            <CancelButton link="/inventories" text="Cancel" className="main__button"/>
            <AddButton children="Save" className="main__button" type="submit" />
          </div>
          </div>
      </form>
    </Card>
  );
};

export default AddNewInventoryPage;
