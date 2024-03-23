import "./index.css";
import { User } from "@nextui-org/react";
import { Links } from "./data";
import LinkPagesComp from "../../share/LinkPagesCmp";
import { BiLogOutCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import AvatarDropDown from "../../share/dropdowns/AvatarDropDown";

const Left = ({ showLeft,toggleLeft}) => {
  return <div
  className={`left-section  ${
    showLeft ? "active" : ""
  } flex flex-col gap-2  `}
>
  <div
    className={`top p-3 bg-white m-3 shadow-lg rounded-lg flex items-center justify-between`}
  >
    <Link
      to={`/profiles/show/${1}`}
      className="flex items-center flex-row gap-2 flex-wrap nowrap"
      onClick={toggleLeft}
    >
      <User
        avatarProps={{
          isBordered: true,
          src: "https://pbs.twimg.com/profile_images/1744393322418802688/-ZF7VwbA_400x400.jpg",
          size: "lg",
          color: "primary",
          className: "whitespace-nowrap truncate",
        }}
        description={<span className="font-bold text-base whitespace-nowrap truncate overflow-hidden">JF34567</span>}
        name={<span className="font-bold text-base whitespace-nowrap truncate overflow-hidden">Abdellah Dev</span>}
      />
    </Link>
    <AvatarDropDown  onclick={toggleLeft} />
  </div>
  <div
    className={`bottom p-5  bg-white mb-3 mx-3 shadow-lg rounded-lg flex-auto flex flex-col gap-3`}
    onClick={toggleLeft}
  >
    {Links.map((l) => (
      <LinkPagesComp
        icon={l.icon}
        key={l.id}
        text={l.text}
        href={l.href}
        className={`block bg-gray-100 font-bold p-3 flex items-center gap-3 rounded-md link-page flex-nowrap overflow-hidden whitespace-nowrap truncate`}
      />
    ))}{" "}
    <button
      className={`block bg-red-200 font-bold p-3 flex items-center justify-center gap-3 rounded-md mt-auto hover:bg-red-500 hover:text-white overflow-hidden whitespace-nowrap truncate`}
    >
      <BiLogOutCircle size={25} /> Logout
    </button>
  </div>
</div>
};

export default Left;
