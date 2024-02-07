import "../TableHeading/TableHeading";
import TableHeading from "../TableHeading/TableHeading";
import InStockStatus from "../InStockStatus/InStockStatus";
import OutOfStockStatus from "../OutOfStockStatus/OutOfStockStatus";
import "./InventoryTable.scss";

const InventoryTable = () => {
  return (
    <table className="table__inventory">
      <tr className="table__row table__heading-row">
        <TableHeading heading="WAREHOUSE" />
        <TableHeading heading="CATEGORY" />
        <TableHeading heading="STATUS"/>
        <TableHeading heading="QUANTITY" className="table__h-quantity"/>
        <th className="table__heading">ACTIONS</th>
      </tr>
      <tr className="table__row">
        <td >Row 1, Cell 1</td>
        <td className="table__data">Row 1, Cell 2</td>
        <td className="table__data">Row 1, Cell 3</td>
        <td className="table__data">Row 1, Cell 4</td>
        <td className="table__data">Row 1, Cell 5</td>
      </tr>
    </table>
  );
};

export default InventoryTable;
