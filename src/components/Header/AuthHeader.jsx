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
    </div>
  );
};

export default Header;
