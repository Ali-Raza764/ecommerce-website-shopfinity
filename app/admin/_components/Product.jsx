import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Product = ({ title, imageUrl, id }) => {
  return (
    <div className="w-full h-12 p-2 flex items-center justify-between gap-4 border shadow hover:-translate-y-2 transition-all duration-300 hover:bg-gray-100">
      <div className="flex items-center gap-3">
        <Image
          src={"/images/hero.png"}
          height={30}
          width={30}
          alt="Product image"
          className="rounded-full h-10 w-10"
        />
        <h3>Iphone 14 pro max</h3>
      </div>
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

export default Product;
