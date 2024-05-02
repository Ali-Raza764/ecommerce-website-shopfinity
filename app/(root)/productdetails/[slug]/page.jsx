import React from "react";
import ImagesShowcase from "./ImagesShowcase";
import ProductDetails from "./ProductDetails";

const ProductDetailsPage = ({ params }) => {
  return (
    <section className="text-gray-600 px-4 py-8 w-full flex lg:flex-row flex-col lg:gap-3">
      <ImagesShowcase />
      <ProductDetails />
    </section>
  );
};

export default ProductDetailsPage;
