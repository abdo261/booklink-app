import React from "react";
import { posts } from "./data";
import Post from "../../components/parts/post/Post";

const List = () => {
  return (
    <div className="flex flex-col gap-3 py-3 ">
      
      {posts.map((p) => (
        <Post post={p} key={p.id} />
      ))}
    </div>
  );
};

export default List;
