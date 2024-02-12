import "./TableHeadingRow.scss";
import TableHeading from "../TableHeading/TableHeading";

const WarehouseTableHeadingRow = () => {
  return (
    <table className="table__warehouse">
      <tr className="table__row table__heading-row">
        <TableHeading text="WAREHOUSE" />
        <TableHeading text="ADDRESS" />
        <TableHeading text="CONTACT NAME"/>
        <TableHeading text="CONTACT INFORMATION" className="table__h-quantity"/>
        <th className="table__heading">ACTIONS</th>
      </tr>
    </table>  
  );
};

export default WarehouseTableHeadingRow;
