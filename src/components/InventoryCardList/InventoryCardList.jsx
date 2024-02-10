import InventoryItemCard from "../DualCard/InventoryItemCard";
import InStockStatus from "../InStockStatus/InStockStatus";
import OutOfStockStatus from "../OutOfStockStatus/OutOfStockStatus";

const InventoryCardList = ({ inventoryList }) => {
  return inventoryList.map((inventory) => {
    return (
      <li>
        <InventoryItemCard
          category={inventory.category}
          itemName={inventory.item_name}
          quantity={inventory.quantity}
          status={inventory.status === "In Stock" ? <InStockStatus/> : <OutOfStockStatus/>}/>
      </li>
    );
  });
};

export default InventoryCardList;
