import React from "react";
import CategoryItem from "./CategoryItem";
import { FaCottonBureau, FaEmber, FaShoppingBag } from "react-icons/fa";
import { MdComputer, MdKitchen, MdWoman } from "react-icons/md";

const CategorySideBar = ({ children }) => {
  const categories = [
    {
      name: "Fashion",
      link: "/categories/fashion",
      icon: <FaShoppingBag size={40} />,
    },
    {
      name: "Computers",
      link: "/categories/computers",
      icon: <MdComputer size={40} />,
    },
    {
      name: "Embriodery",
      link: "/categories/embriodery",
      icon: <FaCottonBureau size={40} />,
    },
    {
      name: "HouseHold",
      link: "/categories/household",
      icon: <MdKitchen size={40} />,
    },
    {
      name: "Women",
      link: "/categories/women",
      icon: <MdWoman size={40} />,
    },
  ];
  return (
    <div className="flex items-center w-full flex-col md:flex-row py-4">
      <div className="md:w-1/5 md:border-r border-gray-500 flex md:flex-col items-center justify-center py-4 md:py-8 gap-y-2 w-full overflow-x-scroll md:overflow-x-hidden">
        {categories.map((category) => (
          <CategoryItem
            name={category.name}
            icon={category.icon}
            link={category.link}
            key={category.name}
          />
        ))}
      </div>
      <div className="w-4/5 hidden md:flex items-center justify-center">{children}</div>
    </div>
  );
};

export default CategorySideBar;
