import Product from "@/components/adminComponents/Product";
import React from "react";

const AllProductsPage = () => {
  const dummyArray = Array.from({ length: 10 }, (v, k) => k);

  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-between mb-3">
        <h1>All Products</h1>
        <h2>Total: 50</h2>
      </div>
      <div className="products-container container flex items-center justify-center flex-col gap-3">
        {dummyArray.map((i) => {
          return <Product />;
        })}
      </div>
    </div>
  );
};

export default AllProductsPage;
