import React from "react";
import TextAreaCmp from "../../components/share/TextAreaCmp";
import { Avatar } from "@nextui-org/react";
import BtnCmp from "../../components/share/BtnCmp";
import { FaImages } from "react-icons/fa";

const Create = () => {
  return (
    <div className="w-full flex flex-col gap-3 bg-white p-3 my-3 rounded-lg">
      <div className="flex items-start gap-2">
        <Avatar
          isBordered
          color="primary"
          radius="md"
          className="transition-transform"
          src="https://pbs.twimg.com/profile_images/1744393322418802688/-ZF7VwbA_400x400.jpg"
        />
        <TextAreaCmp className="flex-grow" placeholder="whrite somthing ..." />
      </div>
      <div className="ligne bg-gray-100 w-full"></div>
      <div className="flex align-center justify-between">
        <div className="buttons">
          <BtnCmp
            isIconOnly={true}
            icon={<FaImages style={{ color: "#70e000" }} size={18} />}
            variant="light"
          />
        </div>
        <BtnCmp
          text="Create"
          color="primary"
          className="font-bold"
          variant="ghost"
        />
      </div>
    </div>
  );
};

export default Create;
