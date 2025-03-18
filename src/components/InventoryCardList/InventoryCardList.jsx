import InventoryItemCard from "../DualCard/InventoryItemCard";
import InStockStatus from "../InStockStatus/InStockStatus";
import OutOfStockStatus from "../OutOfStockStatus/OutOfStockStatus";

const InventoryCardList = ({ inventoryList }) => {
  return inventoryList.map((inventory, index) => {
    return (
      // id was repeating so used index to remove the key error
      <li key={index}>
        <InventoryItemCard
        id={inventory.id}
          category={inventory.category}
          itemName={inventory.item_name}
          warehouseId={inventory.warehouse_id}
          quantity={inventory.quantity}
          status={inventory.status === "In Stock" ? <InStockStatus/> : <OutOfStockStatus/>}/>
      </li>
    );
  });
};

export default InventoryCardList;
