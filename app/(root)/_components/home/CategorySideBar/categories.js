import { FaCottonBureau, FaShoppingBag } from "react-icons/fa";
import { MdComputer, MdKitchen, MdWoman } from "react-icons/md";
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
export default categories;
