import { request } from "../../utils/request";
import { authorActions } from "../slices/AuthorSlice";

export const getAuthors = () => {
  return async (dispatch) => {
    dispatch(authorActions.setError(null));
    dispatch(authorActions.setAuthors(null));
    dispatch(authorActions.setLoading(true));
    try {
      const res = await request.get("/authors-books");
      // console.log("Response:", res);
      console.log("Response Data:", res.data);
      dispatch(authorActions.setError(null));
      dispatch(authorActions.setAuthors(res.data));
    } catch (err) {
      dispatch(authorActions.setError(err.message));
    } finally {
      dispatch(authorActions.setLoading(false));
    }
  };
};
