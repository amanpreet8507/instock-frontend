import "../TableHeading/TableHeading";
import ItemButton from "../ItemButton/ItemButton";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import { Link } from "react-router-dom";
import InventoryDetailsPage from "../../pages/InventoryDetailsPage/InventoryDetailsPage";
import "./DualTable.scss";

const InventoryTable = ({ category, itemName, status, quantity }) => {
  return (
    <table className="table__warehouse">

        <tr className="table__row">
          <td className="table__data table__data-1">
            <Link to ="/inventories/:id"><ItemButton text={itemName} /></Link>
          </td>
          <td className="table__data table__data-middle">{category}</td>
          <td className="table__data table__data-middle">{status}</td>
          <td className="table__data table__data-middle">{quantity}</td>
          <td className="table__data table__data-last">
            <img src={deleteIcon}/>
            <Link to="/inventories/:id/edit"><img src={editIcon}/></Link>
          </td>
        </tr>

    </table>
  );
};

export default InventoryTable;
