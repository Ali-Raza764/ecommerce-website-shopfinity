import React, { Suspense } from "react";
import Navbar from "./Navbar";
import Search from "@/components/reuseable/Search";
import UserControls from "./UserControls";
import SaleHeader from "./SaleHeader";
import MobileNavbar from "./MobileNavbar";
import Image from "next/image";

const Header = ({ children }) => {
  return (
    <>
      <header className="w-full ">
        <SaleHeader />

        <div className="w-full h-14 border-b border-black flex items-center justify-between  lg:px-4 p-2">
          <div className="mobile-nav lg:hidden">
            <MobileNavbar />
          </div>

          <div className="logo font-bold sm:text-xl md:ml-2 ml-1 flex items-center"> 
          <Image src={'/images/icon.svg'} alt="logo" width={50} height={50} className="cursor-pointer" />
          SHOPFINITY</div>

          <div className="simple-nav hidden lg:block">
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
