"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdClose, MdOutlineMenu } from "react-icons/md";
import { links } from "./links";
import { usePathname } from "next/navigation";

const MobileNavbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  return (
    <div>
      <button onClick={toggleMenu}>
        <MdOutlineMenu size={30} />
      </button>

      <div
        className={`fixed z-50 ${
          open ? "backdrop-blur-sm block" : "hidden"
        } h-screen w-screen top-0 right-0 left-0 bottom-0 trasition-all duration-500`}
      >
        <div
          className={`menu fixed top-0 ${
            open ? "left-0" : "-left-[1000px]"
          } bg-white h-screen w-[70vw] transition duration-1000 z-50 p-3`}
        >
          <div className="w-full flex items-center justify-between">
            <h2 className="font-semibold text-xl">SHOPFINITY</h2>
            <button onClick={toggleMenu}>
              <MdClose size={30} />
            </button>
          </div>
          <div className="navigation flex flex-col items-center justify-center my-4 gap-4 overflow-y-auto">
            {links.map((link) => (
              <Link
                onClick={() => {
                  setOpen(!open);
                }}
                key={link.name}
                href={link.href}
                className={`text-gray-900 transition text-lg w-full flex items-center gap-x-4 font-medium`}
              >
                <link.icon size={30} className="text-black" />
                <h3
                  className={`hover:border-black border-b ${
                    pathname === link.href
                      ? "border-black"
                      : "border-transparent"
                  }`}
                >
                  {link.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
