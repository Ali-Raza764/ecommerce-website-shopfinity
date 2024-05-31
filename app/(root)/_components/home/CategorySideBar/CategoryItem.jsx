import Link from "next/link";
import React from "react";
import { MdComputer } from "react-icons/md";

const CategoryItem = ({ name, icon, link }) => {
  return (
    <Link
      href={`/category/${name}`}
      className="flex flex-col items-center justify-center hover:bg-gray-200 transition"
    >
      <div className="md:hidden ">
        <MdComputer size={30} />
      </div>
      <div className="px-4 py-1 text-md  w-max ">{name}</div>
    </Link>
  );
};

export default CategoryItem;
