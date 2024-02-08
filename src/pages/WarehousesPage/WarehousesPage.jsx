import "./WarehousesPage.scss";
import { useState } from "react";
import Header from "../../components/Header/Header";
import WarehouseHeader from "../../components/WarehouseTable/WarehouseHeader";
import WarehouseTable from "../../components/WarehouseTable/WarehouseTable";
import Footer from "../../components/Footer/Footer";
import AddWarehouse from "../../components/AddWarehouse/AddWarehouse";

const WarehousesPage = () => {
  const [addWarehouse, setAddWarehouse] = useState(false);
  return (
    <>
      <Header />
      <main className="main">
        {addWarehouse ? (
          <AddWarehouse  onCancel={()=>setAddWarehouse(false)}/>
        ) : (
          <>
            <WarehouseHeader addWarehouse={() => setAddWarehouse(true)} />
            <WarehouseTable />
          </>
        )}
        
      </main>
      <Footer />
    </>
  );
};

export default WarehousesPage;
