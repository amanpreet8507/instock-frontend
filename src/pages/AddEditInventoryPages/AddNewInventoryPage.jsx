import React, { useEffect, useState } from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import TextField from "../../components/FormComponents/TextField/TextField";
import FormTextarea from "../../components/FormComponents/FormTextarea/FormTextarea";
import CategoryDropdown from "../../components/FormComponents/Dropdowns/CategoryDropdown";
import WarehouseDropdown from "../../components/FormComponents/Dropdowns/WarehouseDropdown";
import RadioButtonSelection from "../../components/FormComponents/RadioButtonSelection/RadioButtonSelection";
import AddButton from "../../components/Buttons/AddButton";
import CancelButton from "../../components/Buttons/CancelButton";
import Card from "../../components/Card/Card";
import { api } from "../../axios/axios";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";


const AddNewInventoryPage = () => {
  const [warehouses, setWarehouses] = useState([]);
  //const [warehouseIDs, setWarehouseID] = useState([]);
  const categoryOptions = [
    "Electronics",
    "Apparel",
    "Accessories",
    "Health",
    "Gear",
    "Accessories",
  ];

  const getAllWarehouses = async () => {
    try {
      const response = await api.get("/warehouses");
      setWarehouses(response.data);
      console.log("response.data", response.data);
    } catch (error) {
      console.error("Error fetching warehouses:", error);
    }
  };

  useEffect(() => {
    getAllWarehouses();
  }, []);

  const navigate = useNavigate();
  const [item_name, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("In Stock");
  const [category, setCategory] = useState("");
  const [warehouse_id, setWarehouse] = useState("");
  const [quantity, setQuantity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [clickSubmit, setClickSubmit] = useState(false);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    if (e.target.value === "Out of Stock") {
      setQuantity("");
    }
  };

  useEffect(() => {
    console.log("Description State: ", description);
  }, [description]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setClickSubmit(true);
    console.log("Form submitted");

    // Basic validation
    if (
      item_name.trim() === "" ||
      description.trim() === "" ||
      status.trim() === "" ||
      category.trim() === "" ||
      warehouse_id === "Select..." ||
      (status === "In Stock" && (!quantity || isNaN(quantity)))
    ) {
      console.log("Validation failed");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    // Construct payload
    const newItem = {
      item_name: item_name.trim(),
      description: description.trim(),
      status: status.trim(),
      category: category.trim(),
      quantity: status === "In Stock" ? parseInt(quantity, 10) || 0 : null,
      warehouse_id: parseInt(warehouse_id, 10),
    };

    console.log("Payload being sent:", newItem);

    try {
      console.log("Attempting to post data...");
      const response = await api.post(
        "/inventories",
        newItem, // Pass the payload
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response received:", response);

      if (response.status === 200) {
        console.log("Inventory posted successfully");
        clearForm();
        setClickSubmit(false);
        navigate("/inventories");
      }
    } catch (error) {
      console.error("Error while posting item", error);
      setErrorMessage("Failed to add new inventory. Please try again.");
    }
  };

  const clearForm = () => {
    setItemName("");
    setDescription("");
    setStatus("");
    setCategory("Select...");
    setQuantity("");
    setWarehouse("");
    setErrorMessage("");
  };

  return (
    <>
      <Header />
      <main className="app__container">
        <Card>
          <div className="main__header-div">
            <MainHeader
              headerTitle="Add New Inventory Item"
              link="/inventories"
            />
          </div>
          <div className="main__body-container">
            <div className="main__body">
              <h2 className="main__h2">Item Details</h2>
              <TextField
                label="Item Name"
                value={item_name}
                setValue={(e) => setItemName(e.target.value)}
                error={
                  clickSubmit && item_name === "" ? "Item name is required" : ""
                }
                required
              />
              <FormTextarea
                label="Description"
                value={description}
                setValue={(e) => setDescription(e.target.value)}
                error={
                  clickSubmit && description === ""
                    ? "Description is required"
                    : ""
                }
                required
              />
              <CategoryDropdown
                label="Category"
                options={categoryOptions}
                //value={setCategory}
                setValue={setCategory}
                error={
                  clickSubmit && category === "" ? "Category is required" : ""
                }
                required
              />
            </div>
            <div className="main__body main__body-right">
              <h2 className="main__h2">Item Availability</h2>
              <RadioButtonSelection
                checked={status}
                onChange={handleStatusChange}
                error={clickSubmit && status === "" ? "Status is required" : ""}
              />

              {status === "In Stock" && (
                <TextField
                  label="Quantity"
                  value={quantity}
                  setValue={(e) => setQuantity(e.target.value)}
                  error={
                    clickSubmit && quantity === "" ? "Quantity is required" : ""
                  }
                  required
                />
              )}
              <WarehouseDropdown
                label="Warehouse"
                options={warehouses.map((warehouse) => ({
                  value: warehouse.id, // ID as the value
                  label: warehouse.warehouse_name, // Name as the display text
                }))}
                setValue={setWarehouse}
                error={
                  clickSubmit && warehouse_id === ""
                    ? "Warehouse is required"
                    : ""
                }
                required
              />
            </div>
          </div>
          <div className="main__button-div">
            <div className="main__buttons">
              <CancelButton
                link="/inventories"
                text="Cancel"
                className="main__button"
              />
              <AddButton
                //link="/inventories"
                action={handleSubmit}
                children="Save"
                className="main__button"
              />
            </div>
          </div>
        </Card>
      </main>
    </>
  );
};

export default AddNewInventoryPage;
