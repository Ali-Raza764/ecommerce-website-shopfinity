import React from "react";

const Featured = () => {
    return (
        <div className="w-full h-full">
          <h1 className="text-3xl font-bold mb-6">Settings</h1>
          <div className="featured-product flex flex-col justify-center gap-3">
            <h2 className="text-xl font-semibold mb-1">Featured Product</h2>
            <input
              type="text"
              className="w-full bg-gray-200 gap-x-3 p-2 border-2 focus:outline-blue-500 rounded-md"
              placeholder="Product Id"
              name="featured-product"
              id="featured-product"
            />
            <button className="text-md font-semibold px-4 p-2 bg-red-500 rounded-md text-white w-max">
              Save
            </button>
          </div>
    
          <div className="hero-products flex flex-col justify-center gap-3 mt-6">
            <h2 className="text-xl font-semibold mb-1">Hero Products</h2>
            <input
              type="text"
              className="w-full bg-gray-200 gap-x-3 p-2 border-2 focus:outline-blue-500 rounded-md"
              placeholder="Product Id"
              name="featured-product"
              id="featured-product"
            />
            <button className="text-md font-semibold px-4 p-2 bg-red-500 rounded-md text-white w-max">
              Save
            </button>
          </div>
        </div>
      );
};

export default Featured;
