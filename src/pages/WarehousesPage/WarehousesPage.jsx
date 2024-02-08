import './WarehousesPage.scss';
import Header from "../../components/Header/Header";
import WarehouseHeader from '../../components/WarehouseTable/WarehouseHeader';
import WarehouseTable from "../../components/WarehouseTable/WarehouseTable";
import Footer from "../../components/Footer/Footer";

const WarehousesPage = () => {
  return (
    <>
      <Header />
      <main className="main">
      <WarehouseHeader />
      <WarehouseTable />
    </main>
    <Footer />
    </>
  )}

export default WarehousesPage;
