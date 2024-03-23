import { request } from "../../utils/request";
import { authorActions } from "../slices/AuthorSlice";

export const getAuthors = () => {
  return async (dispatch) => {
    dispatch(authorActions.setLoading(true));
    dispatch(authorActions.setAuthors(null));
    try {
      const res = await request.get("/authors");
      console.log("Response:", res);
      console.log("Response Data:", res.data);
      dispatch(authorActions.setAuthors(res.data));
      dispatch(authorActions.setError(null));
    } catch (err) {
        console.log(err)
      dispatch(authorActions.setError(err.response.data.message));
    } finally {
      dispatch(authorActions.setLoading(false));
    }
  };
};
