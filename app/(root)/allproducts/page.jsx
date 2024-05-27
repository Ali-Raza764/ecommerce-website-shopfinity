import PaginationControls from "@/components/reuseable/PaginationControls";
import ProductItem from "@/components/reuseable/ProductItem";
import { Suspense } from "react";

const AllProducts = ({ searchParams }) => {
  const dummyArray = Array.from({ length: 30 }, (v, k) => k);

  // * Code to control server side pagination.
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "10";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const entries = dummyArray.slice(start, end);

  return (
    <div className="w-full min-h-screen md:py-6 py-4">
      <div className="container grid grid-cols-2 sm:grid-cols-3 grid-items-center gap-2 md:flex items-center justify-center flex-wrap">
        {entries.map((i) => {
          return <ProductItem key={i} />;
        })}
      </div>

      <div className="pagination my-6">
        <Suspense fallback={<div>Loading...</div>}>
          <PaginationControls
            hasNextpage={end < dummyArray.length}
            hasPreviousPage={start > 0}
            dataLength={dummyArray.length}
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
