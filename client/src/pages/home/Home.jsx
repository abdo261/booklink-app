import { useCallback, useEffect } from "react";
import { CreatePost, ListPost } from ".";
import SwipperHome from "../../components/share/swipper/SwipperHome";
import "./home.css";
import { useSelector, useDispatch } from "react-redux";
import { getAuthors } from "../../redux/apiCalls/author";
import { Spinner } from "@nextui-org/react";
const Home = () => {
  const dispatch = useDispatch();
  const { authors, loading, error } = useSelector((state) => state.author);
  const getAuthorsList = useCallback(() => {
    dispatch(getAuthors());
  }, []);
  useEffect(() => {
    getAuthorsList();
  }, [getAuthorsList]);
  console.log(authors);
  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center" style={{height:"200px"}}>
          {" "}
          <Spinner color="primary" size="lg" />
        </div>
      ) : (
        <SwipperHome authors={authors} />
      )}
      <CreatePost />
      <ListPost />
    </div>
  );
};

export default Home;
