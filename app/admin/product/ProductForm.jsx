import React from "react";

const ProductForm = ({ initailData }) => {
  const editForm = initailData;
  const newForm = !initailData | (initailData === undefined);

  // TODO Make changes to the form to make it adapt the new or edit state

  return (
    <div className="w-full shadow-md shadow-gray-400 px-4 py-6">
      <form
        action=""
        className="flex flex-col items-center justify-center gap-3"
      >
        <div className="w-full">
          <label htmlFor="product_name" className="font-semibold text-lg">
            Enter Your Product Name
          </label>
          <input
            type="text"
            className="w-full bg-gray-200 gap-x-3 p-2 border-2 focus:outline-blue-500 rounded-md"
            placeholder="Product Name"
            name="product_name"
          />
        </div>
        <div className="w-full">
          <label htmlFor="product_image" className="font-semibold text-lg">
            Upload Your Product Image
          </label>
          <input
            type="file"
            className="w-full bg-gray-200 gap-x-3 p-2 border-2 focus:outline-blue-500 rounded-md"
            placeholder="Product image"
            name="product_image"
          />
        </div>
        <div className="category flex w-full flex-col">
          <label htmlFor="categories" className="font-semibold text-lg">
            Select Your category
          </label>
          <select
            name="categories"
            id="categories"
            className="w-full bg-gray-200 gap-x-3 p-2 border-2 focus:outline-blue-500 rounded-md"
          >
            <option value="Computer Accessories">Computer Accessories</option>
            <option value="Computer Accessories">Computer Accessories</option>
            <option value="Computer Accessories">Computer Accessories</option>
            <option value="Computer Accessories">Computer Accessories</option>
          </select>
        </div>
        <div className="description w-full">
          <label htmlFor="description" className="font-semibold text-lg">
            Enter Product Description
          </label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            className="w-full bg-gray-200 gap-x-3 p-2 border-2 focus:outline-blue-500 rounded-md"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
