import React from "react";
import ProductForm from "../../_components/ProductForm";
import Category from "@/lib/models/Category";

const NewProduct = async() => {
  const categories = await Category.find({}).exec();
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold font-sans my-3">Create New Product</h1>
      <ProductForm categories={categories}/>;
    </div>
  );
};

export default NewProduct;
