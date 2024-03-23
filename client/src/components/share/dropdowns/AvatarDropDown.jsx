
import React from "react";
import { IoMdMore } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const AvatarDropDown = ({  onclick }) => {
  const navigate =useNavigate()
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Button isIconOnly={true} size="sm" variant="light">
          <IoMdMore size={20} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Profile Actions"
        variant="flat"
        onClick={onclick}
      >
        <DropdownItem
          key="profile"
          startContent={<BsPerson size={23} />}
          color="primary"
          onClick={() => {
            onclick();
            navigate(`/profiles/show/${1}`);
          }}
        >
          <p className="text-lg font-bold">Profile</p>
        </DropdownItem>

        <DropdownItem
          key="settings"
          startContent={<IoSettingsOutline size={23} />}
          color="warning"
          onClick={() => {
            navigate(`/profiles/settings/${1}`);
            onclick();
          }}
        >
          <p className="text-lg font-bold">Settings</p>
        </DropdownItem>
        <DropdownItem
          key="logout"
          color="danger"
          startContent={<TbLogout2 size={23} />}
        >
          <p className="text-lg font-bold">Log Out</p>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default AvatarDropDown;
