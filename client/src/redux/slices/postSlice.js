import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    post: null,
    loading: false,
    nextPostLoading: false,
    error: null,
    readyToDelete: null,
  },
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    setPost(state, action) {
      state.post = action.payload;
    },
    addPosts(state, action) {
      state.posts = [...state.posts, ...action.payload];
    },
    addPost(state, action) {
      state.posts = [action.payload, ...state.posts];
    },
    updatePost(state, action) {
      state.posts = state.posts.map((a) =>
        a.id === action.payload.id ? { ...a, ...action.payload } : a
      );
    },
    removePost(state, action) {
      state.posts = state.posts.filter((a) => a.id !== action.payload.id);
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setNextPostsLoading(state, action) {
      state.nextPostLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setReadyToDelete(state, action) {
      state.readyToDelete = action.payload;
    },
  },
});

export const postActions = postSlice.actions;
export const postReducer = postSlice.reducer;
