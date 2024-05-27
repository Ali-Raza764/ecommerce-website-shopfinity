import React from "react";
import ImagesShowcase from "./ImagesShowcase";
import ProductDetails from "./ProductDetails";
import RelatedProducts from "./RelatedProducts";

const ProductDetailsPage = ({ params }) => {
  return (
    <main className="w-full min-h-screen px-3 md:px-11 py-8">
      <section className="text-gray-600 w-full flex lg:flex-row flex-col lg:gap-3">
        <ImagesShowcase />
        <ProductDetails />
      </section>
      <section
        aria-label="related products"
        className="w-full my-6 "
      >
        <RelatedProducts category={"Mobile Phones"} />
      </section>
    </main>
  );
};

export default ProductDetailsPage;
