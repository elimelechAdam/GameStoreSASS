import React from "react";
import Logo from "../assets/logo.png";
import { SearchBar } from "./SearchBar";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { HeaderTabs } from "./HeaderTabs";

export const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <img src={Logo} alt="Logo" />
        <SearchBar />
        <div className="header__user">
          <CiUser size={45} className="nav__avatar" />
          <span>Sign in / Register</span>
        </div>
        <CiShoppingCart size={45} className="nav__avatar" />
      </div>
      <HeaderTabs />
    </div>
  );
};
