import "../Header/Header.scss";
import { Link } from "react-router-dom";
// import Logo from "../../../assets/logo/InStock-Logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <a href="/">
          {/* <img src={Logo} alt="InStock Logo"></img> */}instocklogo
        </a>
      </div>
      <nav className="header__nav">
        <li className="header__nav--list">
          <Link to="/warehouses">Warehouses</Link>
        </li>
        <li className="header__nav--list">
          <Link to="/inventory">Inventory</Link>
        </li>
      </nav>
    </div>
  );
};

export default Header;
