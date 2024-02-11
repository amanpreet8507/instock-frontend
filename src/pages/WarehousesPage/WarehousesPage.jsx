import "./WarehousesPage.scss";
import WarehouseDetailsCard from "../../components/DualCard/WarehouseDetailsCard";
import DualHeader from "../../components/DualHeader/DualHeader";
import WarehouseTable from "../../components/DualTable/WarehouseTable";
import { useState } from "react";
import { Card } from "../../components/Card/Card";

const WarehousesPage = () => {
  const [addWarehouse, setAddWarehouse] = useState(false);
  return (
    <>
      <Card>
        <DualHeader
          pageAbout="Warehouses"
          formFieldText="Search..."
          buttonText="+ Add New Warehouse"
          link="/warehouses/add"
        />
        {/* <WarehouseDetailsCard /> */}
        <WarehouseTable />
      </Card>
    </>
  );
};

export default WarehousesPage;
