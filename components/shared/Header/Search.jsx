"use client";
import { MdSearch } from "react-icons/md";
import { useRouter, useSearchParams } from "next/navigation";

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("query") ?? '';

  const submitHandler = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    const term = e.target.search.value;
    if (term) {
      params.set("query", term);
      params.set("page", '1');
      params.set("per_page", '10');
    } else {
      params.delete("query");
    }
    router.push(`${"/search"}?${params.toString()}`);
  };
  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-1 items-center justify-center bg-gray-100 gap-x-3 text-gray-800 p-1 px-2"
    >
      <input
        type="text"
        name="search"
        id="search"
        className=" w-full h-8 px-2 border-2 border-none outline-none rounded-md bg-transparent focus:bg-transparent hover:bg-transparent"
        placeholder="what are you looking for?"
        defaultValue={searchTerm}
      />
      <button>
        <MdSearch size={30} className="text-gray-400" />
      </button>
    </form>
  );
};

export default Search;
