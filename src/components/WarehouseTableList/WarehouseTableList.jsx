import WarehouseTable from "../DualTable/WarehouseTable";
import InStockStatus from "../InStockStatus/InStockStatus";
import OutOfStockStatus from "../OutOfStockStatus/OutOfStockStatus";
import TableHeadingRow from "../TableHeadingRow/TableHeadingRow";

const WarehousTableList = ({ inventoryList }) => {
  return (
    <>
      <TableHeadingRow />
      {inventoryList.map((inventory) => {
        return (
          <li key={inventory.id}>
            <InventoryTable
              category={inventory.category}
              itemName={inventory.item_name}
              quantity={inventory.quantity}
              status={inventory.status === "In Stock" ? <InStockStatus /> : <OutOfStockStatus />}
            />
          </li>
        );
      })}
    </>
  );
};

export default WarehousTableList;
