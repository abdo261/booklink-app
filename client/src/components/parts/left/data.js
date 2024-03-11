import { FaHome,FaClipboardList,FaUsers   } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { PiBookOpenFill } from "react-icons/pi";

export const Links = [
  { id: 1, text: "Home", icon: <FaHome size={25} />, show: true ,href:'/' },
  { id: 2, text: "Categorys", icon: <MdCategory size={25} />, show: true ,href:'/categorys'},
  { id: 3, text: "Books", icon: <PiBookOpenFill size={25} />, show: true ,href:'/books'},
  { id: 4, text: "Orders", icon: <FaClipboardList  size={25} />, show: true ,href:'/orders'},
  { id: 5, text: "Users", icon: <FaUsers  size={25} />, show: true ,href:'/users'},
];
