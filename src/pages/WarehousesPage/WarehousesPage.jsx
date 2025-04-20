import "./WarehousesPage.scss";
import WarehouseDetailsCard from "../../components/DualCard/WarehouseDetailsCard";
import DualHeader from "../../components/DualHeader/DualHeader";
import WarehouseTable from "../../components/DualTable/WarehouseTable";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import axios from "axios";
import { useParams } from "react-router";
import Header from "../../components/Header/Header";
import { api } from "../../axios/axios";

const WarehousesPage = () => {
  const [warehouseData, setWarehouseData] = useState([]);
  const { id } = useParams();

  // Fetching Warehouses
  const getAllWarehouses = async () => {
    try {
      const response = await api.get("/warehouses");
      setWarehouseData(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  // Using function
  useEffect(() => {
    getAllWarehouses();
  }, []);

  return (
    <>
      <Header />
      <main className="app__container">
        <Card>
          <DualHeader
            pageAbout="Warehouses"
            formFieldText="Search..."
            buttonText="+ Add New Warehouse"
            link="/warehouses/add"
          />
          <WarehouseDetailsCard warehouseArr={warehouseData} />
          <WarehouseTable warehouseArr={warehouseData} />
        </Card>
      </main>
    </>
  );
};

export default WarehousesPage;
