import ProductItem from "@/components/products/ProductItem";
import Search from "@/components/shared/Header/Search";
import PaginationControls from "./PaginationControls";
import { Suspense } from "react";

const SearchPage = ({ searchParams }) => {
  const dummyArray = Array.from({ length: 30 }, (v, k) => k);
  const query = searchParams?.query || "";
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "10";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const entries = dummyArray.slice(start, end);

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

      <div className="container flex items-center flex-wrap justify-center">
        {entries.map((item, i) => {
          return <ProductItem key={i} />;
        })}
      </div>

      <div className="pagination my-6">
        <Suspense fallback={<div>Loading...</div>}>
          <PaginationControls
            hasNextpage={end < dummyArray.length}
            hasPreviousPage={start > 0}
            dataLength={dummyArray.length}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default SearchPage;
