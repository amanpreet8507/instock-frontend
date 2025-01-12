import React, { useEffect, useState } from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import TextField from "../../components/FormComponents/TextField/TextField";
import FormTextarea from "../../components/FormComponents/FormTextarea/FormTextarea";
import FormDropdown from "../../components/FormComponents/FormDropdown";
import RadioButtonSelection from "../../components/FormComponents/RadioButtonSelection/RadioButtonSelection";
import AddButton from "../../components/Buttons/AddButton";
import CancelButton from "../../components/Buttons/CancelButton";
import Card from "../../components/Card/Card";
import { api } from "../../axios/axios";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const AddNewInventoryPage = () => {
  const [warehousesNames, setWarehousesNames] = useState([]);

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
  const getAllWarehousesNames = async () => {
    try {
      const response = await axios.get("http://localhost:8080/warehouses");
      const names = response.data.map(warehouse => warehouse.warehouse_name);
      setWarehousesNames(names);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=>{
    getAllWarehousesNames();
  },[]);
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setClickSubmit(true);

    if (
      !item_name ||
      !description ||
      !status ||
      !category ||
      !warehouse_id ||
      (status === "In Stock" && !quantity)
    ) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    const newItem = {
      item_name: item_name,
      description: description,
      status: status,
      category: category,
      quantity: quantity,
      warehouse_id: warehouse_id,
    };

    try {
      const response = await api.post("/inventories", newItem);
      if (response.status === 201) {
        clearForm();
        setClickSubmit(false);
        navigate("/inventories");
      }
    } catch (error) {
      console.error("Error while posting item", error);
      setErrorMessage("Failed to add new inventory. Please try again.");
    }

    const clearForm = () => {
      setItemName("");
      setDescription("");
      setStatus("");
      setCategory("Select...");
      setQuantity("");
      setWarehouse("");
      setErrorMessage("");
    };
  };

  return (
    <Card>
      <div className="main__header-div">
        <MainHeader headerTitle="Add New Inventory Item" link="/inventories" />
      </div>

      <form onSubmit={handleSubmit}>
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
            <FormDropdown
              label="Category"
              options={categoryOptions}
              value={category}
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
              required
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
            <FormDropdown
              label="Warehouse"
              options={warehousesNames}
              value={warehouse_id}
              setValue={setWarehouse}
              error={
                clickSubmit && warehouse_id === ""
                  ? "Warehouse ID is required"
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
              link="/inventories"
              action={handleSubmit}
              children="Save"
              className="main__button"
              type="submit"
            />
          </div>
        </div>
      </form>
    </Card>
  );
};

export default AddNewInventoryPage;
