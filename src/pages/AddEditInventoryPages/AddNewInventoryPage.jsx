import React, { useState } from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import TextField from "../../components/FormComponents/TextField/TextField";
import FormTextarea from "../../components/FormComponents/FormTextarea/FormTextarea";
import FormDropdown from "../../components/FormComponents/FormDropdown";
import RadioButtonSelection from "../../components/FormComponents/RadioButtonSelection/RadioButtonSelection";
import AddButton from "../../components/Buttons/AddButton";
import CancelButton from "../../components/Buttons/CancelButton";

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

  // State to manage the selected status (In Stock or Out of Stock)
  const [selectedStatus, setSelectedStatus] = useState("");

  return (
    <main>
      <div className="main__header-div">
        <MainHeader headerTitle="Add New Inventory Item" />
      </div>
      <div className="main__body-container">
        <div className="main__body">
          <h2 className="main__h2">Item Details</h2>
          <TextField label="Item Name" value="" setValue="" />
          {/* label, value = "", setValue, error = "" */}
          <FormTextarea label="Description" value="" setValue="" />
          <FormDropdown label="Category" options={categoryOptions} />
        </div>
        <div className="main__body main__body-right">
          <h2 className="main__h2">Item Availability</h2>
          <RadioButtonSelection
            checked={selectedStatus}
            onChange={(value) => setSelectedStatus(value)}
          />
          <FormDropdown label="Warehouse" options={warehouseOptions} />
        </div>
      </div>
      <div className="main__button-div">
        <CancelButton text="Cancel" className="main__button" />
        <AddButton children="Save" className="main__button" />
      </div>
    </main>
  );
};

export default AddNewInventoryPage;
