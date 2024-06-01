import PaginationControls from "@/components/reuseable/PaginationControls";
import ProductItem from "@/components/reuseable/ProductItem";
import { fetchAllProducts } from "@/utils/fetchAllItems";
import { Suspense } from "react";

const AllProducts = async ({ searchParams }) => {
  const products = await fetchAllProducts();

  // * Code to control server side pagination.
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "10";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const entries = products.slice(start, end);

  return (
    <div className="w-full min-h-screen md:py-6 py-4">
      <div className="container grid grid-cols-2 sm:grid-cols-3 grid-items-center gap-2 md:flex items-center flex-wrap">
        {entries.map((item) => {
          return (
            <ProductItem
              key={item._id.toString()}
              id={item._id.toString()}
              name={item.name}
              images={item.images}
              price={item.price}
            />
          );
        })}
      </div>

      <div className="pagination my-6">
        <Suspense fallback={<div>Loading...</div>}>
          <PaginationControls
            hasNextpage={end < products.length}
            hasPreviousPage={start > 0}
            dataLength={products.length}
            query={""}
            page={page}
            per_page={per_page}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default AllProducts;
