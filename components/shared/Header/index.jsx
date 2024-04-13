import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";

import UserControls from "./UserControls";
import SaleHeader from "./SaleHeader";
const Header = ({ children }) => {
  return (
    <>
      <header className="w-full">
        <SaleHeader />
        <div className="w-full h-14 border-b border-black flex items-center justify-between px-11 p-2">
          <div className="logo font-bold text-xl">SHOPFINITY</div>
          <div className="nav">
            <Navbar />
          </div>
          <div className="search flex items-center justify-center gap-x-3">
            <Search />
            <UserControls />
          </div>
        </div>
      </header>
      {children}
    </>
  );
};

export default Header;
