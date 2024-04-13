import React from "react";
import { FaHeadphonesAlt, FaMobile, FaMobileAlt } from "react-icons/fa";

const HomeCategoryItem = () => {
  return (
    <div className="h-44 w-44  flex flex-col items-center justify-center border rounded-md border-gray-400">
      <FaHeadphonesAlt size={60} />
      <p className="text-black text-md">Mobile Phones</p>
    </div>
  );
};

export default HomeCategoryItem;
