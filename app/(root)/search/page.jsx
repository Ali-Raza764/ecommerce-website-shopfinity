import ProductItem from "@/components/reuseable/ProductItem";
import Search from "@/components/reuseable/Search";
import PaginationControls from "@/components/reuseable/PaginationControls";
import { Suspense } from "react";
import { fetchAllProducts } from "@/utils/fetchAllItems";

const fetchData = async (query) => {
  try {
    const res = await fetchAllProducts();
    const products = res.filter((product) => {
      return (
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      );
    });
    return products;
  } catch (error) {
    throw new Error(error);
  }
};

const SearchPage = async ({ searchParams }) => {
  const query = searchParams?.query || "";
  const products = await fetchData(query);
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "10";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const entries = products.slice(start, end);

  return (
    <div className="w-full min-h-screen py-3 md:px-8">
      <div className="searchBox px-3 flex flex-1 md:hidden w-full items-center justify-center">
        <Search />
      </div>
      <div className="md:flex items-center gap-3 hidden mb-6">
        <h1 className="font-bold text-3xl font-sans">
          Showing results for: <strong className="text-red-500">{query}</strong>
        </h1>
      </div>

      <div className="container grid grid-cols-2 sm:grid-cols-3 grid-items-center gap-2 md:flex items-center justify-center flex-wrap">
        {/* <div className="container flex items-center flex-wrap justify-center"> */}
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
            page={page}
            per_page={per_page}
            query={query}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default SearchPage;
