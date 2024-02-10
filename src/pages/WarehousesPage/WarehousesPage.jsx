import "./WarehousesPage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import WarehouseDetailsCard from "../../components/DualCard/WarehouseDetailsCard";
import DualHeader from "../../components/DualHeader/DualHeader";
import WarehouseTable from "../../components/DualTable/WarehouseTable";

const WarehousesPage = () => {
  const [addWarehouse, setAddWarehouse] = useState(false);
  return (
    <>
      <Header />
      <main className="main">
        <DualHeader
          pageAbout="Warehouses"
          formFieldText="Search..."
          buttonText="+ Add New Warehouse"
        />
        <WarehouseDetailsCard />
        <WarehouseTable />
      </main>
      <Footer />
    </>
  );
};

export default WarehousesPage;
