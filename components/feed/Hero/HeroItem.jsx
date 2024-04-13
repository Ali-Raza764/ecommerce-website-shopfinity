import ShopNow from "@/components/reuseable/ShopNow";
import Image from "next/image";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { FaApple } from "react-icons/fa";

const HeroItem = () => {
  return (
    <div className="h-full w-full text-white font-sans flex items-center justify-between p-3 text-left">
      <div className="h-full flex flex-col gap-y-4 w-1/2 p-4 justify-center">
        <div className="flex items-center gap-x-3">
          <FaApple size={40} />
          <p className="product-name text-lg font-light">iPhone 15 pro</p>
        </div>
        <div>
          <p className="text-3xl font-bold font-sans">
            Upto 10% off on All sales
          </p>
        </div>
        <div className="shop-now text-left group">
          <ShopNow link="/shop">
            <p className="text-white border-b-2 border-white pb-2 transition-all  group-hover:border-gray-400">
              Shop Now
            </p>
            <BsArrowRightShort
              size={30}
              className="ml-2 transition-all group-hover:ml-4 "
            />
          </ShopNow>
        </div>
      </div>
      <div className="image">
        <Image height={300} width={
          300} src="/images/hero.png" alt="iphone15" priority />
      </div>
    </div>
  );
};

export default HeroItem;
