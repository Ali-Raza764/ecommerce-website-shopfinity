import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import DeleteItemButton from "./DeleteItemButton";

const Product = ({ name, images, id }) => {
  return (
    <div className="w-full h-12 p-2 flex items-center justify-between gap-4 border shadow  transition-all duration-300 hover:bg-gray-100">
      <div className="flex items-center gap-3">
        <Image
          src={images[0]}
          height={30}
          width={30}
          alt="Product image"
          className="rounded-full h-10 w-10"
        />
        <h3>{name}</h3>
        <p>
          Id: <strong>{id}</strong>
        </p>
      </div>
      <div className="controls flex items-center gap-3">
        <Link
          href={`/admin/products/edit/${id}`}
          className="hover:scale-110 transition"
        >
          <FaEdit size={20} />
        </Link>

        <DeleteItemButton itemId={id} type={"product"}>
          <FaTrash
            size={20}
            className="hover:text-red-500 hover:scale-110 transition"
          />
        </DeleteItemButton>
      </div>
    </div>
  );
};

export default Product;
