import { Avatar, User } from "@nextui-org/react";
import React from "react";
import TextAreaCmp from "../../share/TextAreaCmp";
import BtnCmp from "../../share/BtnCmp";
import { timeAgo } from "../../../utils/functions";

const Comments = ({ show, comments }) => {
  return (
    <div className={`comments ${show} mt-3 `}>
      <div className="m-4 flex flex-col gap-3">
        <div className=" create-comment flex items-start gap-2">
          <div style={{ width: " fit-content" }}>
            <Avatar
              isBordered
              color="primary"
              radius="md"
              src="https://pbs.twimg.com/profile_images/1744393322418802688/-ZF7VwbA_400x400.jpg"
            />
          </div>
          <TextAreaCmp
            className="flex-grow"
            placeholder="whrite A Comment..."
          />
          <BtnCmp
            text="Comment"
            className="mt-auto"
            variant="shadow"
            size="sm"
            color="primary"
          />
        </div>
        <div className="ligne bg-gray-100 w-full"></div>{" "}
      </div>
      <div className={`comments-list ${show}`}>
        {comments.map((c, i) => (
          <Comment key={i} comment={c} />
        ))}
      </div>
    </div>
  );
};

export default Comments;

const Comment = ({ comment }) => {
  return (
    <div className="flex  flex-col rounded-md bg-gray-100 text-sm my-2 px-3 mr-2  p-2">
      <div className="flex items-start justify-between gap-2  w-full  ">
        {" "}
        <div className="flex-shrink-0">
          <User
            name={comment.user.profile.user_name}
            description="CLient"
            avatarProps={{
              src: `${process.env.REACT_APP_API_BASE_URL}/images/profiles/${comment.user.profile.image}`,
              isBordered: true,
            }}
            className="font-bold"
          />
        </div>
        <span className=" ml-auto text-gray-400 underline font-bold whitespace-no-wrap text-xs ">
          {timeAgo(comment.created_at)}
        </span>
      </div>
      <div className="pl-12">
        {comment.descreption}
      </div>
    </div>
  );
};
