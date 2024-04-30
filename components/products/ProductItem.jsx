import Image from "next/image";
import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Link from "next/link";

const ProductItem = ({}) => {
  return (
    <Link href={"/productdetails/1"}>
      <div className="flex flex-col p-3 md:h-[20rem] h-auto w-[12rem] md:w-[16rem] ">
        <div className="bg-gray-300 p-4 md:p-14 relative group">
          <Image
            height={500}
            width={500}
            alt="product-image"
            src={"/images/product-1.png"}
          />
          <div>
            <div className="absolute hidden group-hover:block transition top-2 left-4 bg-red-500 rounded-xl text-white p-1">
              -40%
            </div>
            <div className="absolute  flex-col items-center justify-center gap-y-4 hidden group-hover:flex transition top-2 right-4">
              <button className="p-1 bg-white rounded-full">
                <CiHeart size={30} />
              </button>
              <button className="p-1 bg-white rounded-full">
                <MdOutlineRemoveRedEye size={30} />
              </button>
            </div>
            <div className="add-to-cart cursor-pointer absolute bottom-0 right-0 left-0 w-full text-white items-center justify-center text-lg font-sans p-1 hidden group-hover:flex  transition delay-700 group-hover:bg-black">
              <button className="transition">Add To Cart</button>
            </div>
          </div>
        </div>
        <div className="details flex flex-col h-full text-left">
          <h3
            className="text-xl font-semibod font-medium"
            aria-label="product-name"
          >
            Gaming Phone
          </h3>
          <p className="text-md text-red-500">
            $100 <span className="ml-5 line-through text-gray-600">$400</span>
          </p>
          <div className="stats">
            <div className="stars flex items-center">
              <IoStarSharp size={20} className="text-yellow-400" />
              <IoStarSharp size={20} className="text-yellow-400" />
              <IoStarSharp size={20} className="text-yellow-400" />
              <IoStarSharp size={20} className="text-yellow-400" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
