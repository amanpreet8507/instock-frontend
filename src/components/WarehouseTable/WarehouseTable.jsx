import React, {useState} from 'react';
import './WarehouseTable.scss'; 
import TableHeading from "../TableHeading/TableHeading";
import WarehouseTableMobile from "../../components/WarehouseTable/WarehouseTableMobile";
import rightIcon from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg"
import DeleteWarehouse from '../DeleteWarehouse/DeleteWarehouse';
const WarehouseTable = () => {

const [isModalOpen, setIsModalOpen] = useState(false)


  
  return (
    <>
    {isModalOpen && (<DeleteWarehouse onDelete={()=>{}} onClose={()=> setIsModalOpen(false)}/>)}
    <table className="table__warehouse">
    <tr className="table__row table__heading-row">
      <TableHeading heading="WAREHOUSE" />
      <TableHeading heading="ADDRESS" />
      <TableHeading heading="CONTACT NAME"/>
      <TableHeading heading="CONTACT INFORMATION" className="CONTACT INFORMATION"/>
      <th className="table__heading">ACTIONS</th>
    </tr>
    <tr className="table__row">
      <td className='table__data table__warehouse__col--1'><span>Manhattan</span><img src={rightIcon}/></td>
      <td className="table__data">#43, USA</td>
      <td className="table__data">Pamela Ajula</td>
      <td className="table__data">0-000-000-000<br/>abc@demo.com</td>
      <td className="table__data table__warehouse__actions"><img onClick={()=> setIsModalOpen(true)} src={deleteIcon} className='table__data__delete__icon' /><img src={editIcon} /></td>
    </tr>
  </table>
    <WarehouseTableMobile />
  </>
  )
}

export default WarehouseTable
