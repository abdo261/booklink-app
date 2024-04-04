import { toast } from "react-toastify";
import { request } from "../../utils/request";
import { categoryActions } from "../slices/categorySlice";

// export const getCategories = () => {
//   return async (dispatch) => {
//     dispatch(categoryActions.setCategories(null));
//     dispatch(categoryActions.setLoading(true));
//     dispatch(categoryActions.setError(null));
//     try {
//       const res = await request.get("categorys");
//       // console.log("Response Data:", res.data);
//       dispatch(categoryActions.setError(null));
//       dispatch(categoryActions.setCategories(res.data.data));
//     } catch (err) {
//       dispatch(categoryActions.setError(err.message));
//     } finally {
//       dispatch(categoryActions.setLoading(false));
//     }
//   };
// };
// export const getNextPagePosts = (nextPage, cb) => {
//   return async (dispatch) => {
//     dispatch(categoryActions.setNextCategoriesLoading(true));
//     dispatch(categoryActions.setError(null));
//     try {
//       const res = await request.get(`/posts/next?next_page=${nextPage}`);
//       dispatch(categoryActions.setError(null));
//       if (res.data.data.length === 0) {
//         console.log('hii')
//        toast.info("🦄 No more Posts to show you see all posts !",{
//         position:'bottom-center',
//         autoClose:false
//        });
//       }
//       dispatch(categoryActions.addCategories(res.data.data));
//       cb && cb();
//     } catch (err) {
//       dispatch(categoryActions.setError(err.message));
//     } finally {
//       dispatch(categoryActions.setNextPostsLoading(false));
//     }
//   };
// };

// export const CreatePost = (post) => {
//   return async (dispatch) => {
//     dispatch(categoryActions.setLoading(true));
//     dispatch(categoryActions.setError(null));
//     try {
//       const res = await request.post("/posts",post);
//       // console.log("Response Data:", res.data);
//       dispatch(categoryActions.setError(null));
//       dispatch(categoryActions.addPost(res.data.data.post));
//       toast.success('post created successefely')
//     } catch (err) {
//       dispatch(categoryActions.setError(err.message));
//     } finally {
//       dispatch(categoryActions.setLoading(false));
//     }
//   };
// };
// export const UpdatePost = (id,update) => {
//   return async (dispatch) => {
//     dispatch(categoryActions.setLoading(true));
//     dispatch(categoryActions.setError(null));
//     try {
//       const res = await request.put(`/posts${id}`,update);
//       // console.log("Response Data:", res.data);
//       dispatch(categoryActions.setError(null));
//       dispatch(categoryActions.updatePost(res.data.data.post));
//       toast.success('post updated successefely')
//     } catch (err) {
//       dispatch(categoryActions.setError(err.message));
//     } finally {
//       dispatch(categoryActions.setLoading(false));
//     }
//   };
// };
// export const DeletePost = (id) => {
//   return async (dispatch) => {
//     dispatch(categoryActions.setLoading(true));
//     dispatch(categoryActions.setError(null));
//     try {
//       const res = await request.delete(`/posts${id}`);
//       // console.log("Response Data:", res.data);
//       dispatch(categoryActions.setError(null));
//       dispatch(categoryActions.updatePost(res.data.data.post));
//       toast.success('post deleted successefely')
//     } catch (err) {
//       dispatch(categoryActions.setError(err.message));
//     } finally {
//       dispatch(categoryActions.setLoading(false));
//     }
//   };
// };
