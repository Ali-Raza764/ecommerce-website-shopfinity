import Link from "next/link";
import ProductItem from "../_components/ProductItem";
import React from "react";
import { MdAdd } from "react-icons/md";
import { fetchAllProducts } from "@/utils/fetchAllItems";

export const dynamic = "force-dynamic";

const AllProductsPage = async () => {
  const products = await fetchAllProducts();

  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold font-sans">All Products</h1>
        <p>Total: {products.length}</p>
      </div>

      <Link
        href={"/admin/products/new"}
        className="w-24 h-24 flex flex-col items-center justify-center bg-red-500 text-white rounded-md mt-6 group transition hover:bg-red-400"
      >
        <MdAdd className="text-4xl group-hover:text-6xl transition" />
        <h3 className="text-xl font-semibold font-sans group-hover:hidden transition">
          Create
        </h3>
      </Link>

      <div className="products-container container flex items-center justify-center flex-col gap-4 mt-6">
        {products.map((product) => {
          return (
            <ProductItem
              key={product._id.toString()}
              id={product._id.toString()}
              name={product.name}
              images={product.images}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllProductsPage;
