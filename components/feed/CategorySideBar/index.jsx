import React from "react";
import CategoryItem from "./CategoryItem";

const CategorySideBar = ({ children }) => {
  const categories = [
    {
      name: "Fashion",
      link: "/categories/fashion",
    },
    {
      name: "Computers",
      link: "/categories/computers",
    },
    {
      name: "Embriodery",
      link: "/categories/embriodery",
    },
    {
      name: "HouseHold",
      link: "/categories/household",
    },
    {
      name: "Women",
      link: "/categories/women",
    },
  ];
  return (
    <div className="flex items-center w-full py-4">
      <div className="w-1/5 border-r border-gray-500 hidden md:flex flex-col md:py-8 gap-y-2">
        {categories.map((category) => (
          <CategoryItem
            name={category.name}
            link={category.link}
            key={categories.name}
          />
        ))}
      </div>
      <div className="w-full flex items-center justify-center">{children}</div>
    </div>
  );
};

export default CategorySideBar;
