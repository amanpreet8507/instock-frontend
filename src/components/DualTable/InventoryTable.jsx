import "../TableHeading/TableHeading";
import ItemButton from "../ItemButton/ItemButton";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import "./DualTable.scss";

const InventoryTable = ({ category, itemName, status, quantity }) => {
  return (
    <table className="table__warehouse">

        <tr className="table__row">
          <td className="table__data table__data-1">
            <ItemButton text={itemName} />
          </td>
          <td className="table__data">{category}</td>
          <td className="table__data table__data-last">{status}</td>
          <td className="table__data table__data-last">{quantity}</td>
          <td className="table__data table__data-last">
            <img src={deleteIcon} className="table__data__delete__icon" />
            <img src={editIcon} />
          </td>
        </tr>

    </table>
  );
};

export default InventoryTable;
