import { FaShoppingBag, FaStar } from "react-icons/fa";
import { MdCategory, MdHome, MdSettings, MdShoppingCart } from "react-icons/md";

const links = [
  { name: "Dashboard", href: "/admin/dashboard", icon: MdHome },
  { name: "Products", href: "/admin/products", icon: FaShoppingBag },
  { name: "Categories", href: "/admin/categories", icon: MdCategory },
  { name: "Orders", href: "/admin/orders", icon: MdShoppingCart },
  { name: "Featured", href: "/admin/featured", icon: FaStar },
  { name: "Settings", href: "/admin/settings", icon: MdSettings },
];
export default links;
