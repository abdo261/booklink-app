import { configureStore } from "@reduxjs/toolkit";
import { authorReducer } from "./slices/AuthorSlice";
const store = configureStore({ reducer: {
    'author':authorReducer
} });
export default store