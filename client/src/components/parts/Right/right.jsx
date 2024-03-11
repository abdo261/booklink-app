import { FaSearch } from "react-icons/fa";
import BtnCmp from "../../share/BtnCmp";
import InputCmp from "../../share/InputCmp";
import "./index.css";
import {
  IoNotificationsOutline,
  IoChatboxEllipsesOutline,
} from "react-icons/io5";
import { useState } from "react";
import Notifications from "./Notifications";
import Chat from "./Chat";
import { Badge, Tooltip } from "@nextui-org/react";

const Right = ({ showRight }) => {
  const [ShowNotification, setShowNotification] = useState(true);
  return (
    <div
      className={`right-section flex flex-col  gap-2 ${
        showRight ? "active" : ""
      }`}
    >
      <form className="top bg-white p-4 m-3 shadow-lg rounded-lg flex items-center justify-between gap-2">
        <InputCmp
          radius="md"
          variant="bordered"
          className="text-xl font-bold"
          placeholder="Search A Book"
        />
        <BtnCmp
          isIconOnly={true}
          icon={<FaSearch />}
          variant="light"
          type="submit"
          size="md"
        />
      </form>
      <div className="bottom overflow-hidden bg-white p-4 mx-3 mb-3  shadow-lg rounded-lg  flex flex-col flex-auto gap-3">
        <div className="flex items-center justify-around">
          <Badge
            content="99+"
            shape="circle"
            color="danger"
            className="border-gray-300"
          >
            <Tooltip
              color="primary"
              content="Notifications"
              className="capitalize"
              showArrow={true}
            >
              <span>
                {" "}
                <BtnCmp
                  isIconOnly={true}
                  icon={<IoNotificationsOutline size={25} />}
                  variant="light"
                  type="submit"
                  size="md"
                  color={ShowNotification ? "primary" : "default"}
                  className={ShowNotification && "active"}
                  oncklick={() => setShowNotification((prev) => true)}
                />
              </span>
            </Tooltip>
          </Badge>

          <Badge
            content="9"
            shape="circle"
            color="danger"
            className="border-gray-300"
          >
            <Tooltip
              color="primary"
              content="Messages"
              className="capitalize"
              showArrow={true}
            >
              <span>
                <BtnCmp
                  isIconOnly={true}
                  icon={<IoChatboxEllipsesOutline size={25} />}
                  variant="light"
                  type="submit"
                  size="md"
                  color={!ShowNotification ? "primary" : "default"}
                  className={!ShowNotification && "active"}
                  oncklick={() => setShowNotification((prev) => false)}
                />
              </span>
            </Tooltip>
          </Badge>
        </div>
        <div className="flex-grow bg-gray-100 rounded-md  flex flex-col p-2">
          {ShowNotification ? <Notifications /> : <Chat />}
        </div>
      </div>
    </div>
  );
};

export default Right;
