import { configureStore } from "@reduxjs/toolkit";
import { authorReducer } from "./slices/AuthorSlice";
import { postReducer } from "./slices/postSlice";
const store = configureStore({
  reducer: {
    author: authorReducer,
    post: postReducer,
  },
});
export default store;
