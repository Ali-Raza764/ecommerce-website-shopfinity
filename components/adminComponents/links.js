import { FaSalesforce, FaShoppingBag } from "react-icons/fa";
import { MdCategory, MdHome } from "react-icons/md";
import { TiStar } from "react-icons/ti";

const links = [
  { name: "dashboard", href: "/admin/dashboard", icon: MdHome },
  { name: "products", href: "/admin/products", icon: FaShoppingBag },
  { name: "categories", href: "/admin/categories", icon: MdCategory },
  { name: "sales", href: "/admin/products", icon: FaSalesforce },
  { name: "FD Product", href: "/admin/products", icon: TiStar },
];
export default links;
