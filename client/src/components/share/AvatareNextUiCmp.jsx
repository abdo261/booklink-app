import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { BsPerson } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const AvatareNextUiCmp = () => {
const navigate = useNavigate()

  return (
    
    <Dropdown>
      <DropdownTrigger>
        <Avatar
          isBordered
          color="primary"
          as="button"
          className="transition-transform"
          src="https://pbs.twimg.com/profile_images/1744393322418802688/-ZF7VwbA_400x400.jpg"
      
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" variant="shadow" color="primary">
        <DropdownItem
          startContent={<BsPerson size={23} />}
          color="primary"
          onClick={()=>navigate(`/profiles/show/${1}`)} 
        >
          <p className="text-lg font-bold">Profile</p>
        </DropdownItem>

        <DropdownItem
          startContent={<IoSettingsOutline size={23} />}
          color="warning"
          onClick={()=>navigate(`/profiles/settings/${1}`)}
        >
          <p className="text-lg font-bold">Settings</p>
        </DropdownItem>
        <DropdownItem
          color="danger" 
          className="text-danger" 
          startContent={<TbLogout2 size={23} />}
        >
          <p className="text-lg font-bold">Log Out</p>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default AvatareNextUiCmp;
