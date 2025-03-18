import "./TableHeadingRow.scss";
import TableHeading from "../TableHeading/TableHeading";

const TableHeadingRow = () => {
  return (
    <table className="table__warehouse">
      <tr className="table__row table__heading-row">
        <TableHeading text="INVENTORY" />
        <TableHeading text="CATEGORY" />
        <TableHeading text="STATUS"/>
        <TableHeading text="WAREHOUSE"/>
        <TableHeading text="QUANTITY" className="table__h-quantity"/>
        <th className="table__heading">ACTIONS</th>
      </tr>
    </table>  
  );
};

export default TableHeadingRow;
