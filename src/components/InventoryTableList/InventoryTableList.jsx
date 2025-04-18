import InventoryTable from "../DualTable/InventoryTable";
import InStockStatus from "../InStockStatus/InStockStatus";
import OutOfStockStatus from "../OutOfStockStatus/OutOfStockStatus";
import TableHeadingRow from "../TableHeadingRow/InventoryTableHeading";

const InventoryCardList = ({ inventoryList }) => {
  return (
    <>
      <TableHeadingRow />
      {inventoryList.map((inventory, index) => {
        return (
          <li key={index}>
            <InventoryTable
              id={inventory.id}
              category={inventory.category}
              itemName={inventory.item_name}
              warehouseId={inventory.warehouse_id}
              quantity={inventory.quantity}
              status={inventory.status === "In Stock" ? <InStockStatus /> : <OutOfStockStatus />}
            />
          </li>
        );
      })}
    </>
  );
};

export default InventoryCardList;
