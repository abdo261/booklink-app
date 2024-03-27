import "./post.css";
import { Image, Tooltip, User, useDisclosure } from "@nextui-org/react";
import { IoMdMore } from "react-icons/io";
import { Link } from "react-router-dom";
import DropDownEdite from "./DropDownEdite";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { TfiCommentAlt } from "react-icons/tfi";
import AvatarGroupeCmp from "./AvatarGroupeCmp";
import { useState } from "react";
import LikesModale from "../../share/modale/LikesModale";
import Comments from "./Comments";
import PostDescription from "./PostDescription";

const Post = ({ post }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [ShowComments, setShowComments] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  return (
    <>
      <div className="post flex flex-col gap-1 rounded-lg bg-white px-4 pt-3">
        <div className="flex items-center justify-between">
          <Tooltip
            showArrow={true}
            delay={0}
            closeDelay={1}
            color="primary"
            content={
              <div className="px-1 py-2 max-w-70 overflow-hidden">
                <div className="text-small font-bold whitespace-nowrap overflow-ellipsis">
                  {post.user.profile.user_name}
                </div>
                <div className="text-small whitespace-nowrap overflow-ellipsis">
                  {post.user.profile.followers.length} followers
                </div>
              </div>
            }
          >
            <Link to={`/profiles/show/${post.user.profile.id}`} className="">
              {/* <Avatar  src={post.profilePic}/> */}
              <User
                as="button"
                avatarProps={{
                  isBordered: true,
                  src: `${process.env.REACT_APP_API_BASE_URL}/images/profiles/${post.user.profile.image}`,
                }}
                description="user"
                name={post.user.profile.user_name}
              />
            </Link>
          </Tooltip>
          <DropDownEdite size="sm" icon={<IoMdMore size={20} />} id={post.id} />
        </div>
        <div className="post-body">
          <PostDescription description={post.description} />
          {post.image && (
            <div className="post-image flex justify-center py-3">
              <Image
                loading="eager"
                class="max-w- "
                alt="NextUI hero Image with delay"
                src={`${process.env.REACT_APP_API_BASE_URL}/images/posts/${post.user.profile.image}`}
                height={350}
                disableSkeleton={false}
              />
            </div>
          )}
        </div>
        <div className="post footer flex items-center justify-between mt-3">
          <div className="left flex items-center gap-1">
            {!isLiked ? (
              <IoHeartOutline
                className="cursor-pointer"
                size={27}
                onClick={() => setIsLiked(!isLiked)}
              />
            ) : (
              <IoHeart
                color="red"
                className="cursor-pointer"
                size={27}
                onClick={() => setIsLiked(!isLiked)}
              />
            )}
            <span className="cursor-pointer" onClick={onOpen}>
              {" "}
              <AvatarGroupeCmp likes={post.likes} />
            </span>
          </div>
          <div className="right" onClick={() => setShowComments(!ShowComments)}>
            {post.comments.length}{" "}
            <TfiCommentAlt size={26} className="cursor-pointer" />
          </div>
        </div>
        <Comments
          show={ShowComments && "show-comments"}
          comments={post.comments}
        />
      </div>
      <LikesModale
        onOpenChange={onOpenChange}
        likes={post.likes}
        isOpen={isOpen}
        key={post.id}
      />
    </>
  );
};

export default Post;
