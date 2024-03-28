import React, { useCallback,useState } from "react";

import Post from "../../components/share/post/Post";
import { getNextPagePosts } from "../../redux/apiCalls/post";
import { useDispatch, useSelector } from "react-redux";
import BtnCmp from "../../components/share/BtnCmp";
;

const List = ({ posts }) => {
  const [page, setPage] = useState(1);
 
  const dispatch = useDispatch();
  const { nextPostLoading } = useSelector((state) => state.post);
 
  const getNestPostsList = useCallback(() => {
    dispatch(getNextPagePosts(page));
    setPage(prev=>prev+1)
   
  }, [page,dispatch]);

  return (
    <div className="flex flex-col gap-3 py-3 ">
      {posts.map((p,i) => (
        <Post post={p} key={i} />
      ))}
      <BtnCmp text='show more'
     
        onPress={getNestPostsList} isDisabled={nextPostLoading} isLoading={nextPostLoading} />
    </div>
  );
};

export default List;
