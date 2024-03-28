import { useCallback, useEffect } from "react";
import { CreatePost, ListPost } from ".";
import SwipperHome from "../../components/share/swipper/SwipperHome";
import "./home.css";
import { useSelector, useDispatch } from "react-redux";
import { getAuthors } from "../../redux/apiCalls/author";
import { Spinner } from "@nextui-org/react";
import AlertCmp from "../../components/share/AlertCmp";
import { getPosts } from "../../redux/apiCalls/post";
const Home = () => {
  const dispatch = useDispatch();
  const {
    authors,
    loading: authorLoading,
    error: authorError,
  } = useSelector((state) => state.author);

  const {
    posts,
    loading: postLoading,
    error: postError,
  } = useSelector((state) => state.post);

  const getAuthorsList = useCallback(() => {
    dispatch(getAuthors());
  }, [dispatch]);
  const getPostsList = useCallback(() => {
    dispatch(getPosts());
  }, [dispatch]);
  
  useEffect(() => {
    getAuthorsList();
    getPostsList();
  }, [getAuthorsList,getPostsList]);

  return (
    <div>
      {authorError && (
        <div
          className="flex items-center justify-center "
        >
          <AlertCmp message={authorError}  variant="danger" className="w-100" />
        </div>
      )}
      {authorLoading ? (
        <div
          className="flex items-center justify-center"
          style={{ height: "200px" }}
        >
          <Spinner color="primary" size="lg" />
        </div>
      ) : (
       authors && <SwipperHome authors={authors} />
      )}

      <CreatePost />
      {postError && (
        <div
          className="flex items-center justify-center "
        >
          <AlertCmp message={postError}  variant="danger" className="w-100" />
        </div>
      )}
      {postLoading ? (
        <div
          className="flex items-center justify-center"
          style={{ height: "200px" }}
        >
          <Spinner color="primary" size="lg" />
        </div>
      ) : (
       posts && <ListPost posts={posts} />
      )}
    </div>
  );
};

export default Home;
