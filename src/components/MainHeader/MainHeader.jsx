import "./MainHeader.scss";
import arrowBackIcon from "../../assets/icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";

const MainHeader = (props) => {
  return (
    <>
      <div className="header__icon-and-heading">
        <Link to="/" className="header__link">
          <img className="header__arrow-icon" src={arrowBackIcon}></img>
        </Link>
        <h1>{props.headerTitle}</h1>
      </div>
    </>
  );
};

export default MainHeader;
