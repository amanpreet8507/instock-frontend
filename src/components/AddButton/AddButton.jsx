import './AddButton.scss'
import {Link} from "react-router-dom";


// This button should be used on a table/list view where we have "Add New Warehouse" or "Add New Inventory" button which redirect app to a form page.
export const AddButtonLink = (props) => {
  return (
    <Link to={props.link} className="button__add-div">
      {props.children}
    </Link>
  );
};

// This button should be used on a form page where we have "Add Item" or "Add Warehouse" or "Save" to call API to save new inventory or warehouse or edit it.
export const AddButton = (props) => {
  return (
    <button className="button__add-div" onClick={props.action}>
      {props.children}
    </button>

  )
}
