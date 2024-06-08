import React from "react";
import ImagesShowcase from "./ImagesShowcase";
import ProductDetails from "./ProductDetails";
import RelatedProducts from "./RelatedProducts";
import Product from "@/lib/models/Product";
import dbConnect from "@/utils/dbConnect";

const getProduct = async (id) => {
  await dbConnect();
  const res = await Product.findById(id);
  if (res) {
    return res;
  }
  return null;
};

const ProductDetailsPage = async ({ params }) => {
  const product = await getProduct(params.id);
  return (
    <main className="w-full min-h-screen px-3 md:px-11 py-8">
      <section className="text-gray-600 w-full flex lg:flex-row flex-col lg:gap-3">
        <ImagesShowcase images={product.images} />
        <ProductDetails
          id={params.id}
          name={product.name}
          description={product.description}
          price={product.price}
          category={product.category}
          excerpt={product.excerpt}
          images={product.images}
        />
      </section>
      <section aria-label="related products" className="w-full my-6 ">
        <RelatedProducts category={product.category} />
      </section>
    </main>
  );
};

export default ProductDetailsPage;
