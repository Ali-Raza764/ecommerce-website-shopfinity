import { FaSalesforce, FaShoppingBag } from "react-icons/fa";
import { MdCategory, MdHome, MdSettings } from "react-icons/md";
import { TiStar } from "react-icons/ti";

const links = [
  { name: "dashboard", href: "/admin/dashboard", icon: MdHome },
  { name: "products", href: "/admin/products", icon: FaShoppingBag },
  { name: "categories", href: "/admin/categories", icon: MdCategory },
  { name: "Settings", href: "/admin/settings", icon: MdSettings },
];
export default links;
