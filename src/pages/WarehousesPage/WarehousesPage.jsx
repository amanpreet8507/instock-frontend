import "./WarehousesPage.scss";
import WarehouseDetailsCard from "../../components/DualCard/WarehouseDetailsCard";
import DualHeader from "../../components/DualHeader/DualHeader";
import WarehouseTable from "../../components/DualTable/WarehouseTable";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import axios from "axios";
import { useParams } from "react-router";

const WarehousesPage = () => {
  const [warehouseData, setWarehouseData] = useState([]);
  const [warehouse, setWarehouse] = useState("");
  const {id} = useParams()
  
  // Fetching Warehouses
  const getAllWarehouses = async () => {
    try {
      const response = await axios.get("http://localhost:8080/warehouses");
      setWarehouseData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  // // particular warehouse name
  // const getWarehouseName = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:8080/warehouses/${id}`);
  //     setWarehouse(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

// Using function
  useEffect(() => {
    getAllWarehouses();
    // getWarehouseName()
  }, []);

  return (
    <>
      <Card>
        <DualHeader
          pageAbout={warehouse.warehouse_name}
          formFieldText="Search..."
          buttonText="+ Add New Warehouse"
          link="/warehouses/add"
        />
        <WarehouseDetailsCard warehouseArr={warehouseData} />
        <WarehouseTable warehouseArr={warehouseData} />
      </Card>
    </>
  );
};

export default WarehousesPage;
