"use client";

import { usePathname, useRouter } from "next/navigation";

const PaginationControls = ({
  hasNextpage,
  hasPreviousPage,
  dataLength,
  query,
  page,
  per_page,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="w-full flex items-center justify-center gap-6 ">
      <button
        className="bg-red-500 w-[7rem] p-3 border-none shadow hover:bg-red-400 text-white text-semibold rounded-md text-lg transition disabled:bg-red-400"
        disabled={!hasPreviousPage}
        onClick={() => {
          router.push(
            `${pathname}?query=${query}&page=${Number(page) - 1}&per_page=10`
          );
        }}
      >
        Previous
      </button>
      <div className="page_number">
        {page} / {Math.ceil(dataLength / Number(per_page))}
      </div>
      <button
        className="bg-red-500 w-[7rem] p-3 border-none shadow hover:bg-red-400 text-white text-semibold rounded-md text-lg transition disabled:bg-red-400"
        disabled={!hasNextpage}
        onClick={() => {
          router.push(
            `${pathname}?query=${query}&page=${Number(page) + 1}&per_page=10`
          );
        }}
      >
        next
      </button>
    </div>
  );
};

export default PaginationControls;
