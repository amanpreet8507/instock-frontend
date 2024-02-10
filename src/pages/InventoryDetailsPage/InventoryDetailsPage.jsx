import Header from "../../components/Header/Header";
import MainHeader from "../../components/MainHeader/MainHeader";
import InventoryItemCard from "../../components/DualCard/InventoryItemCard";
import "./InventoryDetailsPage.scss";
import InventoryTable from "../../components/DualTable/InventoryTable";
import Footer from "../../components/Footer/Footer";

const InventoryDetailsPage = () => {
  return (
    <>
      <main className="main">
        <MainHeader headerTitle="Washington" />
        <InventoryItemCard />
        <InventoryTable />
      </main>
    </>
  );
};

export default InventoryDetailsPage;
