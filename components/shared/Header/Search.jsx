"use client";
import { useState } from "react";
import { MdSearch } from "react-icons/md";

const Search = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="flex items-center justify-center bg-gray-100 gap-x-3 text-gray-800 p-1 px-2">
      <input
        type="text"
        className=" w-full h-8 px-2 border-2 border-none outline-none rounded-md bg-transparent "
        placeholder="what are you looking for?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button>
        <MdSearch size={30} className="text-gray-400" />
      </button>
    </div>
  );
};

export default Search;
