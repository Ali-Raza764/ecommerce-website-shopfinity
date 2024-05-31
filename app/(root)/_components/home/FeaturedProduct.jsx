import Image from "next/image";
import React from "react";
import { fetchFeaturedProduct } from "@/utils/fetchAllItems";
import Link from "next/link";

const FeaturedProduct = async () => {
  const product = await fetchFeaturedProduct();
  return (
    <div className="featuredProduct w-full md:h-screen p-4 bg-gradient-to-r from-black to-gray-900 flex flex-col-reverse md:flex-row items-center justify-between my-11 py-8 gap-4">
      <div className="md:w-1/2  md:p-11 flex flex-col justify-center gap-y-4 md:gap-y-11 text-left">
        <h2 className="text-green-500 font-semibold font-sans text-2xl">
          {product?.category}
        </h2>
        <p className="md:text-5xl text-4xl font-medium text-white">
          {product?.headingText}
        </p>
        <div className="text-lg text-gray-300 font-sans">
          {product?.relatedText}
        </div>
        <Link
          href={"/productdetails" + product.productId}
          className="bg-green-500  text-white px-4 py-2 text-lg w-32 rounded-md"
        >
          Buy Now
        </Link>
      </div>
      <div className="md:w-1/2  p-4">
        <Image
          height={600}
          width={600}
          src={product?.image}
          className="md:pl-14 shadow-2xl shadow-gray-400"
          alt="Featured Product"
        />
      </div>
    </div>
  );
};

export default FeaturedProduct;
