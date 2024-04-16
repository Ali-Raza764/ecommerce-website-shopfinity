import Link from "next/link";
import React from "react";

const CategoryItem = ({ name, link }) => {
  return (
    <Link href={link}>
      <div
        className="px-4 py-1 text-md cursor-pointer
    hover:bg-gray-100 transition w-max "
      >
        {name}
      </div>
    </Link>
  );
};

export default CategoryItem;
