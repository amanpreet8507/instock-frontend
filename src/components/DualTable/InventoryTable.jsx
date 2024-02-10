import "../TableHeading/TableHeading";
import TableHeading from "../TableHeading/TableHeading";
import ItemButton from '../ItemButton/ItemButton';
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg"
import InStockStatus from "../InStockStatus/InStockStatus";
import OutOfStockStatus from "../OutOfStockStatus/OutOfStockStatus";
import "./DualTable.scss";

const InventoryTable = () => {
  return (
    <table className="table__warehouse">
      <tr className="table__row table__heading-row">
        <TableHeading text="WAREHOUSE" />
        <TableHeading text="CATEGORY" />
        <TableHeading text="STATUS"/>
        <TableHeading text="QUANTITY" className="table__h-quantity"/>
        <th className="table__heading">ACTIONS</th>
      </tr>
      <tr className="table__row">
        <td className='table__data table__warehouse__col-1'><ItemButton text="Manhattan"/></td>
        <td className="table__data">Row 1, Cell 2</td>
        <td className="table__data"><InStockStatus/></td>
        <td className="table__data">Row 1, Cell 4</td>
        <td className="table__data table__warehouse__actions"><img src={deleteIcon} className='table__data__delete__icon' /><img src={editIcon} /></td>
      </tr>
    </table>
  );
};

export default InventoryTable;
