import Link from "next/link";
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const CategoryItem = ({ name, icon, link }) => {
  return (
    <div className="w-full h-12 p-2 flex items-center justify-between gap-4 border shadow hover:-translate-y-2 transition-all duration-300 hover:bg-gray-100">
      {icon}
      <p className="font-semibold text-xl">{name}</p>
      <div className="controls flex items-center gap-3">
        <Link href={`/admin/product/edit/productid`}>
          <FaEdit size={20} />
        </Link>
        <button>
          <FaTrash size={20} />
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;
