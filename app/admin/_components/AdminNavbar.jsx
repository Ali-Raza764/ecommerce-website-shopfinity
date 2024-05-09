import { MdDashboard } from "react-icons/md";
import links from "./links";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

const AdminNavbar = () => {
  return (
    <nav className="min-h-screen flex flex-col items-center justify-between py-4 px-2 border-r bg-gray-50 min-w-[15rem]">
      <div className="w-full">
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
                className="p-2 gap-3 hover:bg-gray-100 bg-white border transition font-semibold font-sans rounded-md flex items-center text-left"
              >
                <link.icon size={25} />
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="user w-full flex items-center gap-3 bg-white border p-2 rounded-md">
        <div className="p-2 bg-gray-400 rounded-full">
          <FaUser size={30} />
        </div>
        <h2 className="text-2xl font-semibold">Ali Raza</h2>
      </div>
    </nav>
  );
};

export default AdminNavbar;
