import ShopNow from "@/components/reuseable/ShopNow";
import React from "react";

const SaleHeader = () => {
  return (
    <div className="flex items-center justify-center bg-black text-white md:text-md text-sm px-1 md:gap-x-6 ">
      <ShopNow link={"/productdetails/11"}>
        <p className="w-full text-ellipsis line-clamp-2 text-center text-md">
          Summer Sale for all suits with free delievery - OF 50% !{" "}
          <span className="underline font-semibold">Shop Now</span>
        </p>
      </ShopNow>
    </div>
  );
};

export default SaleHeader;
