import React from "react";
import ProductForm from "../../../_components/ProductForm";
import Product from "@/lib/schemas/Product";
import Category from "@/lib/schemas/Category";

const EditProduct = async ({ params }) => {
  const product = await Product.findById(params.id);
  const categories = await Category.find({}).exec();

  const initailData = {
    name: product.name,
    category: product.category,
    images: product.images,
    price: product.price,
    excerpt: product.excerpt,
    description: product.description,
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold font-sans my-3">
        Edit Your Product 
      </h1>
      <ProductForm initailData={initailData} id={params.id} categories={categories}/>;
    </div>
  );
};

export default EditProduct;
