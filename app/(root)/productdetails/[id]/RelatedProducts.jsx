import ProductItem from "@/components/reuseable/ProductItem";
import Category from "@/lib/models/Category";
import Product from "@/lib/models/Product";
import dbConnect from "@/utils/dbConnect";
import React from "react";

const getItems = async (category) => {
  dbConnect();
  const res = await Product.find({ category: category }).limit(10);
  if (res) {
    return res;
  }
  return null;
};

const RelatedProducts = async ({ category }) => {
  const products = await getItems(category);
  return (
    <div className="flex items-center justify-start flex-wrap">
      {products.map((item) => (
        <ProductItem
          key={item._id.toString()}
          id={item._id.toString()}
          name={item.name}
          images={item.images}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default RelatedProducts;
