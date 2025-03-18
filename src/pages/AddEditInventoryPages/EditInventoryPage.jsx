import React, { useState, useEffect } from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import "./EditInventoryPage.scss";
import TextField from "../../components/FormComponents/TextField/TextField";
import FormTextarea from "../../components/FormComponents/FormTextarea/FormTextarea";
import AddButton from "../../components/Buttons/AddButton";
import CancelButton from "../../components/Buttons/CancelButton";
import RadioButtonSelection from "../../components/FormComponents/RadioButtonSelection/RadioButtonSelection";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "../../components/Card/Card";
import { api } from "../../axios/axios";
import CategoryDropdown from "../../components/FormComponents/Dropdowns/CategoryDropdown";
import WarehouseDropdown from "../../components/FormComponents/Dropdowns/WarehouseDropdown";

const EditInventoryPage = () => {
  {
    /****************** Use States ************/
  }

  const { id } = useParams();
  const navigate = useNavigate();
  const [clickSubmit, setClickSubmit] = useState(false);
  const [status, setStatus] = useState("In Stock");
  const [quantity, setQuantity] = useState("");
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [warehouse_id, setWarehouseId] = useState("");
  const [category, setCategory] = useState("");
  const [warehouses, setWarehouses] = useState([]);
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    if (e.target.value === "Out of Stock") {
      setQuantity("");
    }
  };
  const categoryOptions = [
    "Electronics",
    "Apparel",
    "Accessories",
    "Health",
    "Gear",
    "Accessories",
  ];
  const warehouseOptions = async () => {
    try {
      const response = await api.get("/warehouses");
      console.log('Warehosue options from EditInventoryPage: ', response.data);
      return response.data.map((warehouse) => ({
        value: warehouse.id, // warehouse ID as value
        label: warehouse.warehouse_name // warehouse name as label
      }));
    } catch (error) {
      console.error("Error while fetching warehouseOptions:", error);
    }
  };

  {
    /****************** Edit Inventory *******************/
  }
  const inventoryObject = {
    item_name: itemName,
    description: description,
    category: category,
    warehouse_id: warehouse_id,
    status: status,
    quantity: quantity,
  };

  {
    /****************** Handle Submit *********************/
  }
  const handleSubmit = async () => {
    setClickSubmit(true);
    // Validate the form
    if (!validateForm()) {
      return;
    }
    try {
      const res = await axios.put(
        `http://localhost:8080/inventories/${id}`,
        inventoryObject
      );
      if (res.status === 200) {
        navigate("/inventories");
      }
    } catch (error) {
      console.log("handleSubmit error:", error);
    }
  };

  const validateForm = () => {
    return (
      itemName &&
      description &&
      category &&
      warehouse_id &&
      status &&
      (status === "In Stock" || quantity)
    );
  };


  {
    /****************** Fetching data and throwing inside the form fields by default ************/
  }

  const fetchData = async () => {
    try {
      const response = await api.get(`inventories/${id}`);
      console.log(`Fetching inventory from: http://localhost:8080/inventories/${id}`);

      if (response.status === 200) {
        const inventoryData = response.data;
        setItemName(inventoryData.item_name);
        setCategory(inventoryData.category);
        setQuantity(inventoryData.quantity);
        setStatus(inventoryData.status);
        setDescription(inventoryData.description);
        setWarehouseId(inventoryData.warehouse_id);
      }
    } catch (error) {
      console.error(
        "Error while fetching inventory details in Edit Inventory Page",
        error
      );
    }
  };

  
  {
    /******* put the data to api***********/
  }

  useEffect(() => {
    const fetchWarehouses = async () => {
      const data = await warehouseOptions();
      if (data) {
        setWarehouses(data);
      }
    };
    fetchWarehouses();
    fetchData();
  }, []);



  return (
    <Card>
      <div className="main__header-div">
        <MainHeader headerTitle="Edit Inventory Item" link="http://localhost:3000/inventories" />
      </div>
      <div className="main__body-container">
        <div className="main__body">
          <h2 className="main__h2">Item Details</h2>

          <TextField
            label="Item Name"
            value={itemName}
            setValue={(e) => {
              setItemName(e.target.value);
            }}
            error={clickSubmit && itemName === "" ? "Required" : ""}
          />
          <FormTextarea
            label="Description"
            value={description}
            setValue={(e) => {
              setDescription(e.target.value);
            }}
            error={clickSubmit && description === "" ? "Required" : ""}
          />
          <CategoryDropdown
            label="Category"
            value={category}
            options={categoryOptions}
            setValue={setCategory}
            error={clickSubmit && category === "" ? "Required" : ""}
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
            />
          )}

          <WarehouseDropdown
            label="Warehouse"
            value={warehouse_id}
            options={warehouses}
            setValue={setWarehouseId}
            error={clickSubmit && warehouse_id === "" ? "Required" : ""}
          />
        </div>
      </div>
      <div className="main__button-div">
        <div className="main__buttons">
          <CancelButton
            text="Cancel"
            link="/inventories"
            className="main__button"
          />
          <AddButton
            action={handleSubmit}
            children="Save"
            className="main__button"
            type="submit"
          />
        </div>
      </div>
    </Card>
  );
};

export default EditInventoryPage;
