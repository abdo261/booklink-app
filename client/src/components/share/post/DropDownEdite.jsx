import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import React from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

const DropDownEdite = ({ icon, size }) => {
  return (
    <Dropdown size={size}>
      <DropdownTrigger>
        <Button variant="light" size="sm">
          {icon}
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem
          startContent={<FaPencilAlt />}
          className="text-warning"
          color="warning"
        >
          Edit{" "}
        </DropdownItem>
        <DropdownItem
          startContent={<FaTrashAlt />}
          className="text-danger"
          color="danger"
        >
          Delete
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDownEdite;
