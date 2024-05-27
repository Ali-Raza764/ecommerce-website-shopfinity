import categories from "@/app/(root)/_components/home/CategorySideBar/categories";
import React from "react";
import CategoryItem from "../_components/CategoryItem";
import { MdAdd } from "react-icons/md";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold font-sans">Categories</h1>
        <p>Total: {categories.length}</p>
      </div>

      <Link
        href={"/admin/categories/create"}
        className="w-24 h-24 flex flex-col items-center justify-center bg-red-500 text-white rounded-md mt-6 group transition hover:bg-red-400"
      >
        <MdAdd  className="text-4xl group-hover:text-6xl transition" />
        <h3 className="text-xl font-semibold font-sans group-hover:hidden transition">Create</h3>
      </Link>

      <div className="container flex items-center justify-center flex-col gap-4 mt-6">
        {categories.map((item) => {
          return (
            <CategoryItem
              name={item.name}
              icon={item.icon}
              key={item.name}
              link={"/admins/categories/edit"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
