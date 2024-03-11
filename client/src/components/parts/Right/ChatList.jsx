import { Chip, Tooltip, User } from "@nextui-org/react";
import React from "react";

const ChatList = () => {
  const chats = new Array(30).fill(null);
  return (
    <div className="flex-grow flex">
      <div className="chat-list-container flex flex-col w-full border-t border-gray-300 py-1 px-2">
        {chats.map((c, index) => (
          <Tooltip
            showArrow={true}
            delay={1}
            closeDelay={0}
            offset={15}
            content={
              <div className="px-1 py-2 max-w-70 overflow-hidden">
                <div className="text-small font-bold whitespace-nowrap overflow-ellipsis">
                  User Name
                </div>
                <div className="text-small whitespace-nowrap overflow-ellipsis">
                  Message Message Message Message Message Message
                  nxjbcjnxbcjhxbchjxbcx
                </div>
              </div>
            }
            key={index}
          >
            <div className="border cursor-pointer flex justify-between items-center rounded-md border-gray-100 p-2 border-solid hover:bg-blue-200">
             
                {" "}
                <User
                  as="button"
                  avatarProps={{
                    isBordered: true,
                    src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                    size: "sm",
                    color: "success",
                    
                  }}
                  className="transition-transform"
                  description="user"
                  name="Tony Reichert"
                />
            <Chip color="success" size="sm">3</Chip>
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
