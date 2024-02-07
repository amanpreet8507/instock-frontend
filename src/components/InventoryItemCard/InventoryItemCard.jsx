import "./InventoryItemCard.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import ItemButton from "../ItemButton/ItemButton";
import InStockStatus from "../InStockStatus/InStockStatus";
import OutOfStockStatus from "../OutOfStockStatus/OutOfStockStatus";

const InventoryItemCard = () => {
  return (
    <>
    {/* Mobile Breakpoints */}
      <div className="card__inventory">
        <div className="card__info-div">
          <div>
            <div className="card__inner-div">
              <p className="card__title">INVENTORY NAME</p>
              <ItemButton buttonTitle="Televison" />
            </div>
            <div className="card__inner-div">
              <p className="card__title">CATEGORY</p>
              <p>Category Name</p>
            </div>
          </div>
          <div>
            <div className="card__inner-div">
              <p className="card__title">STATUS</p>
              <InStockStatus />
              
            </div>
            <div className="card__inner-div">
              <p className="card__title">QTY</p>
              <p>500</p>
            </div>
          </div>
        </div>
        <div className="card__icons">
          <img src={deleteIcon}></img>
          <img src={editIcon}></img>
        </div>
      </div>
      {/* Tablet and desktop breakpoints */}
      
    </>
  );
};

export default InventoryItemCard;
