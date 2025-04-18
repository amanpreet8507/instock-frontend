import "../Header/Header.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo/InStock-Logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <a href="/">
          <img src={Logo} alt="InStock Logo"></img>
        </a>
      </div>
      <nav className="header__nav">
        <li className="header__nav--list">
          <NavLink
            to="/warehouses"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Warehouses
          </NavLink>
        </li>
        <li className="header__nav--list">
          <NavLink to="/inventories">Inventory</NavLink>
        </li>
        <li className="header__nav--list">
          <NavLink to="/login">Sign Out</NavLink>
        </li>
      </nav>
    </div>
  );
};

export default Header;
