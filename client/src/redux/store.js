import { configureStore } from "@reduxjs/toolkit";
import { authorReducer } from "./slices/AuthorSlice";
import { postReducer } from "./slices/postSlice";
import { authreducer } from "./slices/authSlice";
const store = configureStore({
  reducer: {
    author: authorReducer,
    post: postReducer,
    auth:authreducer
  },
});
export default store;
