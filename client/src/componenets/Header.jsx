import React from "react";
import Logo from "../assets/logo.png";
import { SearchBar } from "./SearchBar";
import { HeaderTabs } from "./HeaderTabs";
import { useMsgQuerys } from "../lib/react-query/queries";

export const Header = () => {
  const { findGameQuery } = useMsgQuerys();
  const { isLoading, error, data } = findGameQuery(28);
  // console.log(data);
  return (
    <div className="header">
      <div className="nav">
        <img src={Logo} alt="Logo" />
        <SearchBar />
      </div>
      <HeaderTabs />
    </div>
  );
};
