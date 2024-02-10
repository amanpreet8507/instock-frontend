import "./WarehousesPage.scss";
import WarehouseDetailsCard from "../../components/DualCard/WarehouseDetailsCard";
import DualHeader from "../../components/DualHeader/DualHeader";
import WarehouseTable from "../../components/DualTable/WarehouseTable";
import { useState } from "react";

const WarehousesPage = () => {
  const [addWarehouse, setAddWarehouse] = useState(false);
  return (
    <>
      <main className="main">
        <DualHeader
          pageAbout="Warehouses"
          formFieldText="Search..."
          buttonText="+ Add New Warehouse"
          link="/warehouses/add"
        />
        <WarehouseDetailsCard />
        <WarehouseTable />
      </main>
    </>
  );
};

export default WarehousesPage;
