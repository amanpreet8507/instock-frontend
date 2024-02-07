import sortIcon from '../../assets/icons/sort-24px.svg'
import './TableHeading.scss'

const TableHeading = (props) => {
  return (
    <th className='table__heading'>
        {props.heading}
        <img src={sortIcon}></img>
    </th>
  )
}

export default TableHeading
