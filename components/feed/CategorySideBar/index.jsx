import React from "react";
import CategoryItem from "./CategoryItem";

const CategorySideBar = ({ children }) => {
  return (
    <div className="flex items-center w-full py-4">
      <div className="w-1/5 border-r border-gray-300 flex flex-col py-8 gap-y-2">
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </div>
      <div className="w-full flex items-center justify-center">{children}</div>
    </div>
  );
};

export default CategorySideBar;
