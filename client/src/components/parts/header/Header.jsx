import "./header.css";
import { BsList } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { TbWorldQuestion, TbWorldOff } from "react-icons/tb";
import AvatareNextUi from "../../share/AvatareNextUiCmp";
import { Link } from "react-router-dom";

const Header = ({ toggleLeft, toggleRight, showLeft, showRight }) => {
  return (
    <div className="header header ">
      <button className="toggle-btn toggle-btn-left" onClick={toggleLeft}>
        {showLeft ? <IoCloseOutline size={30} /> : <BsList size={30} />}
      </button>
      <div className="header-container flex  items-center">
        <Link to="/">
          <span className="logo flex items-center gap-2">
            <img
              src="/images/wepik-blue-removebg-preview.png"
              alt="logo"
              className="h-full"
            />
            <span>BookLink</span>
          </span>
        </Link>
        <span className="avatare">
          <AvatareNextUi />
        </span>
      </div>
      <button className="toggle-btn toggle-btn-right" onClick={toggleRight}>
        {showRight ? <TbWorldOff size={30} /> : <TbWorldQuestion size={30} />}
      </button>
    </div>
  );
};

export default Header;
