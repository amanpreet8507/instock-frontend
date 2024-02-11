import MainHeader from "../../components/MainHeader/MainHeader";
import TextField from "../../components/FormComponents/TextField/TextField";
import FormTextarea from "../../components/FormComponents/FormTextarea/FormTextarea";
import "./EditInventoryPage.scss";
import FormDropdown from "../../components/FormComponents/FormDropdown";
import RadioButtonSelection from "../../components/FormComponents/RadioButtonSelection/RadioButtonSelection";
import AddButton from "../../components/Buttons/AddButton";
import CancelButton from "../../components/Buttons/CancelButton";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const EditInventoryPage = () => {
  const { id } = useParams();
  const [inventoryData, setInventoryData] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [warehouse, setWarehouse] = useState("");

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

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/inventories/${id}`
      );
      const inventoryData= response.data;
      const { item_name, description, category, warehouse_name, status } = inventoryData;
      setInventoryData(inventoryData);
      setItemName(item_name);
      setDescription(description);
      setCategory(category);
      setWarehouse(warehouse_name);
      setSelectedStatus(status === "In Stock" ? "1" : "2");
    } catch (error) {
      console.error(
        "Error while fetching inventory details in Edit Inventory Page",
        error
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async () => {
    try {
      await axios.put(`http://localhost:8080/inventories/${id}`, {
        item_name: itemName,
        description,
        category,
        warehouse_name: warehouse,
        status: selectedStatus === "1" ? "In Stock" : "Out of Stock",
      });
      console.log("Inventory updated successfully!");
    } catch (error) {
      console.error("Error updating inventory:", error);
    }
  };

  return (
    <main>
      <div className="main__header-div">
        <MainHeader headerTitle="Edit Inventory Item" />
      </div>
      <div className="main__body-container">
        <div className="main__body">
          <h2 className="main__h2">Item Details</h2>
          <TextField label="Item Name" value={inventoryData.item_name} onChange={(e) => setItemName(e.target.value)}/>

          <FormTextarea label="Description" value={inventoryData.description} onChange={(e) => setDescription(e.target.value)}/>
          <FormDropdown
            label="Category"
            value={inventoryData.category}
            options={categoryOptions}
            onChange={(e) => setCategory(e.target.value)} 
          />
        </div>
        <div className="main__body main__body-right">
          <h2 className="main__h2">Item Availability</h2>
          <RadioButtonSelection
            checked={selectedStatus}
            onChange={(value) => setSelectedStatus(value)}
          />
          <FormDropdown
            label="Warehouse"
            value={inventoryData.warehouse_name}
            options={warehouseOptions}
            onChange={(e) => setWarehouse(e.target.value)}
          />
        </div>
      </div>
      <div className="main__button-div">
        <CancelButton text="Cancel" className="main__button" />
        <AddButton children="Save" className="main__button" onClick={handleSubmit} />
      </div>
    </main>
  );
};

export default EditInventoryPage;
