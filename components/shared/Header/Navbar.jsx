"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "./links";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-center gap-x-6">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`text-gray-900 hover:border-black border-b transition text-lg font-medium ${
            pathname === link.href ? "border-black" : "border-transparent"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
