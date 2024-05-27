import ProductItem from "@/components/reuseable/ProductItem";
import React from "react";

const RelatedProducts = ({ category }) => {
  //TODO use the category to fetch related products
  const dummyArray = Array.from({ length: 10 }, (v, k) => k);

  return (
    <div className="flex items-center justify-start flex-wrap">
      {dummyArray.map((item) => (
        <ProductItem key={item} />
      ))}
    </div>
  );
};

export default RelatedProducts;
