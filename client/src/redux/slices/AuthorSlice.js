import { createSlice } from "@reduxjs/toolkit";

const authorSlice = createSlice({
  name: "author",
  initialState: {
    authors: [],
    author: null,
    loading:false,
    error:null,
    readyToDelete:null,
  },
  reducers: {
    setAuthors(state, action) {
      state.authors = action.payload;
    },
    setAuthor(state, action) {
      state.author = action.payload;
    },
    addAuthor(state, action) {
      state.authors = [action.payload, ...state.authors];
    },
    updateAuthor(state, action) {
      state.authors = state.authors.map((a) =>
        a.id === action.payload.id ? { ...a, ...action.payload } : a
      );
    },
    removeAuthor(state, action) {
      state.authors = state.authors.filter((a) => a.id !== action.payload.id);
    },
     setLoading(state,action){
        state.loading = action.payload
     },
     setError(state,action){
        state.error = action.payload
     },
     setReadyToDelete(state,action){
        state.readyToDelete = action.payload
     }
  },
});

export const authorActions = authorSlice.actions
export const authorReducer = authorSlice.reducer
