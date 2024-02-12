import React, { useState, useEffect } from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import "./EditInventoryPage.scss";
import TextField from "../../components/FormComponents/TextField/TextField";
import FormTextarea from "../../components/FormComponents/FormTextarea/FormTextarea";
import FormDropdown from "../../components/FormComponents/FormDropdown";
import AddButton from "../../components/Buttons/AddButton";
import CancelButton from "../../components/Buttons/CancelButton";
import RadioButtonSelection from "../../components/FormComponents/RadioButtonSelection/RadioButtonSelection"
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Card from "../../components/Card/Card";

const EditInventoryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [inventoryData, setInventoryData] = useState({
    item_name: "",
    description: "",
    category: "",
    warehouse_name: "",
    status: "",
    quantity: "",
  });

  const [selectedStatus, setSelectedStatus] = useState("");
  const [clickSubmit, setClickSubmit] = useState(false);

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

  const handleSubmit = async () => {
    setClickSubmit(true);

    // Validate the form
    if (!validateForm()) {
      return;
    }

    try {
      const res = await axios.put(`http://localhost:8080/inventories/${id}`, {
        ...inventoryData,
      });

      if (res.status === 200) {
        navigate("/inventories");
      }
    } catch (error) {
      console.log("handleSubmit error:", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/inventories/${id}`
      );
      const inventoryData = response.data;
      setInventoryData({
        ...inventoryData,
        status: inventoryData.status === "In Stock" ? "1" : "2",
      });
      setSelectedStatus(inventoryData.status);
    } catch (error) {
      console.error(
        "Error while fetching inventory details in Edit Inventory Page",
        error
      );
    }
  };

  const validateForm = () => {
    return (
      inventoryData.item_name &&
      inventoryData.description &&
      inventoryData.category &&
      inventoryData.warehouse_name &&
      inventoryData.status &&
      (inventoryData.status === "1" || inventoryData.quantity)
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <div className="main__header-div">
          <MainHeader headerTitle="Edit Inventory Item" />
        </div>
        <div className="main__body-container">
          <div className="main__body">
            <h2 className="main__h2">Item Details</h2>

            <TextField
              label="Item Name"
              value={inventoryData.item_name}
              onChange={(e) =>
                setInventoryData({
                  ...inventoryData,
                  item_name: e.target.value,
                })
              }
              error={clickSubmit && !inventoryData.item_name ? "Required" : ""}
            />
            <FormTextarea
              label="Description"
              value={inventoryData.description}
              onChange={(e) =>
                setInventoryData({
                  ...inventoryData,
                  description: e.target.value,
                })
              }
              error={
                clickSubmit && !inventoryData.description ? "Required" : ""
              }
            />
            <FormDropdown
              label="Category"
              value={inventoryData.category}
              options={categoryOptions}
              onChange={(e) =>
                setInventoryData({
                  ...inventoryData,
                  category: e.target.value,
                })
              }
              error={clickSubmit && !inventoryData.category ? "Required" : ""}
            />
          </div>
          <div className="main__body main__body-right">
            <h2 className="main__h2">Item Availability</h2>

            <RadioButtonSelection
              label="Status"
              options={[
                { value: "In Stock", label: "In Stock" },
                { value: "Out of Stock", label: "Out of Stock" },
              ]}
              selected={inventoryData.status}
              onChange={(value) =>
                setInventoryData({ ...inventoryData, status: value })
              }
              error={!inventoryData.status ? "Required" : ""}
            />
            {selectedStatus === "In Stock" && (
              <TextField
                label="Quantity"
                value={inventoryData.quantity}
                onChange={(e) =>
                  setInventoryData({
                    ...inventoryData,
                    quantity: e.target.value,
                  })
                }
                error={
                  clickSubmit &&
                  !inventoryData.quantity &&
                  inventoryData.status === "In Stock"
                    ? "Required"
                    : ""
                }
              />
            )}
            <FormDropdown
              label="Warehouse"
              value={inventoryData.warehouse_name}
              options={warehouseOptions}
              onChange={(e) =>
                setInventoryData({
                  ...inventoryData,
                  warehouse_name: e.target.value,
                })
              }
              error={
                clickSubmit &&
                !inventoryData.warehouse_name &&
                !inventoryData.status
                  ? "Required"
                  : ""
              }
            />
          </div>
        </div>
        <div className="main__button-div">
          <div className="main__buttons">

              <CancelButton text="Cancel" link="/inventories" className="main__button" />
            <AddButton children="Save" className="main__button" type="submit" />
          </div>
        </div>
      </form>
    </Card>
  );
};

export default EditInventoryPage;
