import "./DualCard.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import ItemButton from "../ItemButton/ItemButton";

const WarehouseDetailsCard = (props) => {
  return (
    <>
    {/* Mobile Breakpoints */}
      <div className="card">
        <div className="card__info-div">
          <div>
            <div className="card__inner-div">
              <h4 className="card__title">WAREHOUSE</h4>
              <ItemButton text="Manhattan" />
            </div>
            <div className="card__inner-div">
              <h4 className="card__title card__h4">ADDRESS</h4>
              <p className="card__inner-details" >2876 Street,Washington-USA</p>
            </div>
          </div>
          <div>
            <div className="card__inner-div">
              <h4 className="card__title">CONTACT NAME</h4>
              <p className="card__inner-details"> Pamela Aujla </p>
              
            </div>
            <div className="card__inner-div">
              <h4 className="card__title card__contact card__h4">CONTACT INFORMATION</h4>
              <p className="card__inner-details card__phone-email">1-111-111-1111</p>
              <p className="card__inner-details card__phone-email">pdw@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="card__icons">
          <img src={deleteIcon}></img>
          <img src={editIcon}></img>
        </div>
      </div>      
    </>
  );
};

export default WarehouseDetailsCard;
