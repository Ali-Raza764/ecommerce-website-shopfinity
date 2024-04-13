import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

const ShopNow = ({ link, classname, children }) => {
  return (
    <Link href={link}>
      <button
        className={twMerge(
          "font-semibold text-lg flex items-center ",
          classname
        )}
      >
        {children}
      </button>
    </Link>
  );
};

export default ShopNow;
