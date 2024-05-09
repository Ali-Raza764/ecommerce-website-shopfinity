import React, { Suspense } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import UserControls from "./UserControls";
import SaleHeader from "./SaleHeader";
import MobileNavbar from "./MobileNavbar";

const Header = ({ children }) => {
  return (
    <>
      <header className="w-full ">
        <SaleHeader />

        <div className="w-full h-14 border-b border-black flex items-center justify-between px-3 md:px-2 lg:px-11 p-2 ">
          <div className="mobile-nav md:hidden">
            <MobileNavbar />
          </div>

          <div className="logo font-bold text-xl ml-2">SHOPFINITY</div>

          <div className="simple-nav hidden md:block">
            <Navbar />
          </div>

          <div className="search flex items-center justify-between gap-3">
            <div className="hidden md:block">
              <Suspense fallback={<div>Loading</div>}>

              <Search />
              </Suspense>
            </div>
            <UserControls />
          </div>
        </div>
      </header>
      {children}
    </>
  );
};

export default Header;
