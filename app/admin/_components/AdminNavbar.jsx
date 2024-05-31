"use client";
import { MdClose, MdDashboard, MdList, MdMenu } from "react-icons/md";
import links from "./links";
import Link from "next/link";
import { FaCross, FaList, FaUser } from "react-icons/fa";
import { useRef } from "react";
import { UserButton } from "@clerk/nextjs";

const AdminNavbar = () => {
  const navRef = useRef();
  const toggleSidebar = () => {
    navRef.current.classList.toggle("-left-[1000px]");
    navRef.current.classList.toggle("left-0");
  };
  return (
    <>
      <header className="w-full border shadow p-2 md:hidden flex items-center gap-6">
        <button onClick={toggleSidebar}>
          <MdMenu size={30} />
        </button>
        <h3 className="text-xl font-bold  font-mono">Admin</h3>
      </header>
      <nav
        ref={navRef}
        className={
          "min-h-screen flex flex-col items-center justify-between py-4 px-2 border-r bg-gray-900 text-white md:min-w-[15rem] min-w-[70vw] fixed md:static top-0 -left-[1000px] bottom-0 transition"
        }
      >
        <div className="w-full">
          <button onClick={toggleSidebar} className="md:hidden">
            <MdClose size={30} />
          </button>
          <div className="flex items-center gap-3 mb-6">
            <MdDashboard size={30} />
            <h2 className="text-2xl font-bold font-sans">Admin Panel</h2>
          </div>
          <div className="flex flex-col gap-y-3 w-full">
            {links.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="p-2 gap-3 hover:bg-gray-800  transition font-semibold font-sans rounded-md flex items-center text-left"
                >
                  <link.icon size={25} />
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="user w-full flex items-center gap-3 p-2 rounded-md">
       <UserButton />
        </div>
      </nav>
    </>
  );
};

export default AdminNavbar;
