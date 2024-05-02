import React from "react";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

const ProductDetails = () => {
  return (
    <div className="lg:w-1/2 w-full md::pl-10 md::py-6 mt-6 md:mt-0">
      <h2 className="text-sm title-font text-gray-500 tracking-widest">
        BRAND NAME
      </h2>
      <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
        The Catcher in the Rye
      </h1>
      <div className="flex mb-4">
        <span className="flex items-center">
          <BsStarFill className="w-4 h-4 text-indigo-500" />
          <BsStarFill className="w-4 h-4 text-indigo-500" />
          <BsStarFill className="w-4 h-4 text-indigo-500" />
          <BsStarFill className="w-4 h-4 text-indigo-500" />
          <BsStarHalf className="w-4 h-4 text-indigo-500" />
          <span className="text-gray-600 ml-3">4 Reviews</span>
        </span>
        <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2">
          <AiOutlineHeart className="text-gray-500" />
          <AiOutlineShoppingCart className="text-gray-500" />
          <AiOutlineSearch className="text-gray-500" />
        </span>
      </div>
      <p className="leading-relaxed">
        Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha
        taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole
        raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric.
        Gastropub blue bottle austin listicle pour-over, neutra jean shorts
        keytar banjo tattooed umami cardigan.
      </p>
      <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
        <div className="flex">
          <span className="mr-3">Color</span>
          <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
          <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
          <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
        </div>
        <div className="flex ml-6 items-center">
          <span className="mr-3">Size</span>
          <div className="relative">
            <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
              <option>SM</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
            <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="flex">
        <span className="title-font font-medium text-2xl text-gray-900">
          $58.00
        </span>
        <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
          Button
        </button>
        <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
          <FaHeart />
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
