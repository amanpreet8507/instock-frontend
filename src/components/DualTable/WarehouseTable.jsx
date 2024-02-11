import "./DualTable.scss";
import ItemButton from "../ItemButton/ItemButton";
import TableHeading from "../TableHeading/TableHeading";
import rightIcon from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

const WarehouseTable = () => {
  return (
    <>
      <table className="table__warehouse">
        <tr className="table__row table__heading-row">
          <TableHeading text="WAREHOUSE" />
          <TableHeading text="ADDRESS" />
          <TableHeading text="CONTACT NAME" />
          <TableHeading
            text="CONTACT INFORMATION"
            className="CONTACT INFORMATION"
          />
          <th className="table__heading">ACTIONS</th>
        </tr>
        <tr className="table__row">
          <td className="table__data table__warehouse__col-1">
            <ItemButton text="Manhattan" />
          </td>
          <td className="table__data">#43, USA</td>
          <td className="table__data">Pamela Ajula</td>
          <td className="table__data">
            0-000-000-000
            <br />
            abc@demo.com
          </td>
          <td className="table__data table__warehouse__actions">
            <img src={deleteIcon} className="table__data__delete__icon" />
            <img src={editIcon} />
          </td>
        </tr>
      </table>
    </>
  );
};

export default WarehouseTable;
