import React from "react";
import CategoryItem from "./CategoryItem";
import { fetchAllCategories } from "@/utils/fetchAllItems";

const CategorySideBar = async({ children }) => {
  const categories = await fetchAllCategories();
  return (
    <div className="flex items-center w-full flex-col md:flex-row py-4">
      <div className="md:w-1/5 md:border-r border-gray-500 flex md:flex-col items-center justify-center py-4 md:py-8 gap-y-2 w-full overflow-x-scroll md:overflow-x-hidden">
        {categories.map((category) => (
          <CategoryItem
            name={category.name}
            // icon={category.icon}
            // link={category.link}
            key={category.name}
          />
        ))}
      </div>
      <div className="w-4/5 hidden md:flex items-center justify-center">{children}</div>
    </div>
  );
};

export default CategorySideBar;
