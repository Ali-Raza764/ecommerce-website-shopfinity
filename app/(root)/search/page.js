import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 gap-x-3 text-gray-800 p-1 px-2">
      <input
        className=" w-full h-8 px-2 border-2 border-none outline-none rounded-md bg-transparent "
        placeholder="what are you looking for?"
      />
      <CiSearch className="text-3xl" />
    </div>
  );
};

export default Search;
