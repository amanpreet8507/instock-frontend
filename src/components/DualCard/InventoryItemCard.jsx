import "./DualCard.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import ItemButton from "../ItemButton/ItemButton";
import InStockStatus from "../InStockStatus/InStockStatus";
import OutOfStockStatus from "../OutOfStockStatus/OutOfStockStatus";
import { Link } from "react-router-dom";
const InventoryItemCard = ({ id, category, itemName, status, quantity }) => {
  return (
    <>
      {/* Mobile Breakpoints */}
      <div className="card">
        <div className="card__info-div">
          <div>
            <div className="card__inner-div">
              <h4 className="card__title">INVENTORY NAME</h4>
              <Link to={`/inventories/${id}`}>
                <ItemButton
                  link="/inventories"
                  text={itemName}
                  className="card__inner-details"
                />
              </Link>
            </div>
            <div className="card__inner-div">
              <h4 className="card__title card__h4">CATEGORY</h4>
              <p className="card__inner-details">{category}</p>
            </div>
          </div>
          <div>
            <div className="card__inner-div card__status-qty">
              <h4 className="card__title">STATUS</h4>
              <div className="card__inner-details">{status}</div>
            </div>
            <div className="card__inner-div">
              <h4 className="card__title card__h4">QTY</h4>
              <p className="card__inner-details">{quantity}</p>
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
