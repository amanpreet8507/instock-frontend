import MainHeader from "../../components/MainHeader/MainHeader";
import InventoryItemCard from "../../components/DualCard/InventoryItemCard";
import "./InventoryDetailsPage.scss";
import InventoryTable from "../../components/DualTable/InventoryTable";
import {Card} from "../../components/Card/Card";

const InventoryDetailsPage = () => {
  return (
    <>
      <Card>
        <MainHeader headerTitle="Washington" />
        <InventoryItemCard />
        <InventoryTable />
      </Card>
    </>
  );
};

export default InventoryDetailsPage;
