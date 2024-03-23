import { Avatar, User } from "@nextui-org/react";
import React from "react";
import TextAreaCmp from "../../share/TextAreaCmp";
import BtnCmp from "../../share/BtnCmp";
import { comments } from "../../../pages/home/data";

const Comments = ({ show }) => {
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
        {comments.map((c) => (
          <Comment key={c.id} comment={c} />
        ))}
      </div>
    </div>
  );
};

export default Comments;

const Comment = ({ comment }) => {
  return (
    <div className="flex items-start gap-2  w-full px-3 py-2 ">
      {" "}
      <div className="flex-shrink-0">
        <User
          name="Jane Doe"
          description="CLient"
          avatarProps={{
            src: comment.profilePicture,
            isBordered: true,
            size: "sm",
          }}
        />
      </div>
      <span className="flex-grow flex flex-col p-2 rounded-md bg-gray-100 text-sm">
        <span>{comment.desc}</span>
        <span className=" ml-auto text-gray-400 underline font-bold whitespace-no-wrap text-xs ">
        2 min ago
      </span>
      </span>
     
    </div>
  );
};
