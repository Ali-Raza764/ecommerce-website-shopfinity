import ShopNow from "@/components/reuseable/ShopNow";
import React from "react";

const SaleHeader = () => {
  return (
    <div className="flex items-center justify-center bg-black text-white text-md  px-1 gap-x-6">
      <p>Summer Sale for all suits with free delievery - OF 50% ! </p>
      <ShopNow link={"/shop"}>
        <p className="underline ">Shop Now</p>
      </ShopNow>
    </div>
  );
};

export default SaleHeader;
