import Image from "next/image";
import React from "react";
import { IoStarSharp } from "react-icons/io5";
import Link from "next/link";
import WishListButton from "./WishListButton";
import AddToCartButton from "./AddToCartButton";

const ProductItem = ({ name, price, images, id }) => {
  return (
    <div className="flex flex-col p-3 md:h-[20rem] h-auto min-w-[11rem] w-auto max-w-[14rem] md:w-[16rem] ">
      <div className="bg-gray-300 p-4 relative group transition duration-1000">
        <Image height={500} width={500} alt="product-image" src={images[0]} />
        <div>
          <div className="absolute flex-col  items-center justify-center gap-y-4  group-hover:flex transition top-1 right-1 hover:scale-110">
            <WishListButton id={id} size={30} />
          </div>

          <div className="absolute transition opacity-0 flex items-center justify-center drop-shadow-md translate translate-y-1/4 group-hover:opacity-100 group-hover:-translate-y-5 hover:scale-110  bg-white rounded-full p-1 right-1 bottom-1">
            <AddToCartButton id={id} className={'p-1 bg-white rounded-full'} />
          </div>
        </div>
      </div>
      <Link href={`/productdetails/${id}`}>
        <div className="details flex flex-col h-full text-left my-2 gap-2">
          <h3
            className="text-xl font-semibod font-medium font-sans text-ellipsis line-clamp-1"
            aria-label="product-name"
          >
            {name}
          </h3>
          <p className="text-md font-semibold font-sans">
            Price: <span className="text-red-500"> {price}</span>
            <span className="ml-5 line-through text-gray-600">{price}</span>
          </p>
          <div className="stats flex items-center gap-3">
            <div>Review: </div>
            <div className="stars flex items-center">
              <IoStarSharp size={20} className="text-yellow-400" />
              <IoStarSharp size={20} className="text-yellow-400" />
              <IoStarSharp size={20} className="text-yellow-400" />
              <IoStarSharp size={20} className="text-yellow-400" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
