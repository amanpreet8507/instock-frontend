import "./WarehouseHeader.scss";
import searchIcon from "./../../assets/icons/search-24px.svg";
import editIcon from "./../../assets/icons/edit-24px.svg";

const WarehouseHeader = ({addWarehouse}) => {
  return (
    <>
      <div className="warehouseheading__div main__warehouseHeader-div">
        <div className="header__heading__div">
          <h1 className="header__name">Warehouses</h1>
        </div>
        <div className="header__search-div">
          <p className="header__search-p">Search...</p>
          <img className="header__search-icon" src={searchIcon}></img>
        </div>

        <div onClick={addWarehouse} className="header__add-div">
          <p className="header__add-p">+ Add New Warehouse</p>
        </div>
      </div>
    </>
  );
};

export default WarehouseHeader;
