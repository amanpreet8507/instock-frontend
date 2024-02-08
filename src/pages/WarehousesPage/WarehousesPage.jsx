import './WarehousesPage.scss';
import Header from "../../components/Header/Header";
import WarehouseHeader from '../../components/WarehouseTable/WarehouseHeader';
import WarehouseTable from "../../components/WarehouseTable/WarehouseTable";
const WarehousesPage = () => {
  return (
    <>
      <Header />
      <main className="main">
      <WarehouseHeader />
      <WarehouseTable />
    </main>
    </>
  );
};

export default WarehousesPage;
