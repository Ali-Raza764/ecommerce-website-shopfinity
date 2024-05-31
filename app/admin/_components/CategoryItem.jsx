import Link from "next/link";
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import DeleteItemButton from "./DeleteItemButton";

const CategoryItem = ({ name, link, id }) => {
  return (
    <div className="w-full h-12 p-2 flex items-center justify-between gap-4 border shadow duration-300 hover:bg-gray-100">
      <MdComputer size={35} />
      <p className="font-semibold text-xl">{name}</p>
      <div className="controls flex items-center gap-3">
        <Link href={link}>
          <FaEdit size={20} />
        </Link>
        <DeleteItemButton itemId={id} type={"category"} name={name}>
          <FaTrash
            size={20}
            className="hover:text-red-500 hover:scale-110 transition"
          />
        </DeleteItemButton>
      </div>
    </div>
  );
};

export default CategoryItem;
