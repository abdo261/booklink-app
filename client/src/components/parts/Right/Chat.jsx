import React, { useState } from "react";
import SwipperUsersChat from "../../share/swipper/SwipperUsersChat";
import { IoIosArrowDropleft } from "react-icons/io";
import BtnCmp from "../../share/BtnCmp";
import { Avatar } from "@nextui-org/react";
import ChatList from "./ChatList";
import Conversation from "./Conversation";

const Chat = () => {
  const [itemSelected, setItemSelected] = useState(null);
  const selectItem = (item) => {
    setItemSelected((prev) => item);
  };
  return (
    <div className="flex flex-col  flex-grow ">
      <SwipperUsersChat selectItem={selectItem} />
      <div className=" flex flex-col  flex-grow">
        {itemSelected && (
          <div className="flex items-center justify-between">
            <BtnCmp
              isIconOnly={true}
              icon={<IoIosArrowDropleft size={20} className="cursor-pointer" />}
              oncklick={() => selectItem(null)}
              variant="light"
              size="sm"
              radius="sm"
            />{" "}
            <Avatar size="sm" />
          </div>
        )}
        {itemSelected ? (
          <Conversation itemSelected={itemSelected} />
        ) : (
          <ChatList />
        )}
      </div>
    </div>
  );
};

export default Chat;
