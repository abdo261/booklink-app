import { toast } from "react-toastify";
import { request } from "../../utils/request";
import { postActions } from "../slices/postSlice";

export const getPosts = () => {
  return async (dispatch) => {
    dispatch(postActions.setPosts(null));
    dispatch(postActions.setLoading(true));
    dispatch(postActions.setError(null));
    try {
      const res = await request.get("/posts");
      // console.log("Response Data:", res.data);
      dispatch(postActions.setError(null));
      dispatch(postActions.setPosts(res.data.data));
    } catch (err) {
      dispatch(postActions.setError(err.message));
    } finally {
      dispatch(postActions.setLoading(false));
    }
  };
};
export const getNextPagePosts = (nextPage, cb) => {
  return async (dispatch) => {
    dispatch(postActions.setNextPostsLoading(true));
    dispatch(postActions.setError(null));
    try {
      const res = await request.get(`/posts/next?next_page=${nextPage}`);
      dispatch(postActions.setError(null));
      if (res.data.data.length === 0) {
        console.log('hii')
       toast.info("🦄 No more Posts to show you see all posts !",{
        position:'bottom-center',
        autoClose:false
       });
      }
      dispatch(postActions.addPosts(res.data.data));
      cb && cb();
    } catch (err) {
      dispatch(postActions.setError(err.message));
    } finally {
      dispatch(postActions.setNextPostsLoading(false));
    }
  };
};
