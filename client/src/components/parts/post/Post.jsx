import "./post.css";
import { Avatar, Image, Tooltip, User } from "@nextui-org/react";
import BtnCmp from "../../share/BtnCmp";
import { IoMdMore } from "react-icons/io";
import { Link } from "react-router-dom";
import DropDownEdite from "./DropDownEdite";

const Post = ({ post }) => {
  console.log(post);
  return (
    <div className="post flex flex-col gap-1 rounded-lg bg-white p-4">
      <div className="flex items-center justify-between">
        <Tooltip
          showArrow={true}
          delay={0}
          closeDelay={1}
          color="primary"
          content={
            <div className="px-1 py-2 max-w-70 overflow-hidden">
              <div className="text-small font-bold whitespace-nowrap overflow-ellipsis">
                {post.name}
              </div>
              <div className="text-small whitespace-nowrap overflow-ellipsis">
                {post.name}
              </div>
            </div>
          }
        >
          <Link to={`/profiles/show/${post.userId}`} className="">
            {/* <Avatar  src={post.profilePic}/> */}
            <User
              as="button"
              avatarProps={{
                isBordered: true,
                src: post.profilePic,
              }}
              description="user"
              name="Tony Reichert"
            />
          </Link>
        </Tooltip>
        <DropDownEdite
         icon={<IoMdMore size={20}/>}
        />
      </div>
      <div className="post-body">
        <div className="post-text font-bold">{post.desc}</div>
        <div className="post-image flex justify-center py-3">
          <Image
            class="max-w-"
            alt="NextUI hero Image with delay"
            src={post.img}
            width={350}
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
