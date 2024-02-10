import Header from "../../components/Header/Header";
import AddressCard from "../../components/AddressCard/AddressCard";
import MainHeader from "../../components/MainHeader/MainHeader";
import InventoryItemCard from "../../components/DualCard/InventoryItemCard";
import "./WarehouseDetailsPage.scss";
import InventoryTable from "../../components/DualTable/InventoryTable";
import Footer from "../../components/Footer/Footer";
import { Card } from "../../components/Card/Card";

const WarehouseDetailsPage = () => {
  return (
    <>
      <Card>
        <MainHeader headerTitle="Washington" />
        <AddressCard />
        <InventoryItemCard />
        <InventoryTable />
      </Card>
    </>
  );
};

export default WarehouseDetailsPage;
