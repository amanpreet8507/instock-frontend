import React, { useState } from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import TextField from "../../components/FormComponents/TextField/TextField";
import FormTextarea from "../../components/FormComponents/FormTextarea/FormTextarea";
import FormDropdown from "../../components/FormComponents/FormDropdown";
import RadioButtonSelection from "../../components/FormComponents/RadioButtonSelection/RadioButtonSelection";
import AddButton from "../../components/Buttons/AddButton";
import CancelButton from "../../components/Buttons/CancelButton";
import Card from "../../components/Card/Card";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../axios/axios";

const AddNewInventoryPage = ({ onCancel }) => {
  const navigate = useNavigate();
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("In Stock");
  const [quantity, setQuantity] = useState("");
  const [warehouse, setWarehouse] = useState("");
  const [clickSubmit, setClickSubmit] = useState(false);

  // Option values for category and warehouse dropdowns
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

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    if (e.target.value === "Out of Stock") {
      setQuantity("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setClickSubmit(true);

    // Front-end validation
    if (
      itemName === "" ||
      description === "" ||
      status === "" ||
      category === "" ||
      warehouse === "" ||
      (status === "In Stock" && !quantity)
    ) {
      console.log("Please fill out all required fields");
      return;
    }

    try {
      // Perform API request to add inventory item
    
      const response = await api.post("/inventories", {
        itemName,
        description,
        status,
        category,
        warehouse,
      });
      console.log(response.data);

      // After successful submission, clear form fields and navigate to inventory page
      clearForm();
      setClickSubmit(false);
      navigate("/inventories");
    } catch (error) {
      console.log("handleSubmit error:", error);
    }
  };

  const clearForm = () => {
    // Clear form fields
    setItemName("");
    setDescription("");
    setStatus("");
    setCategory("");
    setQuantity("");
    setWarehouse("");
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
              setValue={(e) => setWarehouse(e.target.value)}
            />
          </div>
        </div>
        <div className="main__button-div">
          <div className="main__buttons">
            <CancelButton link="/inventories" text="Cancel" />
            <AddButton children="Save" type="submit" />
          </div>
        </div>
      </form>
    </Card>
  );
};

export default AddNewInventoryPage;
