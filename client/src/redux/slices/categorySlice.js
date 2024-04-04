import { createSlice } from "@reduxjs/toolkit";

const categorieslice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    category: null,
    loading: false,
    nextCategoryLoading: false,
    error: null,
    readyToDelete: null,
  },
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    addCategory(state, action) {
      state.categories = [...state.categories, ...action.payload];
    },
    addCategories(state, action) {
      state.categories = [action.payload, ...state.categories];
    },
    updateCategory(state, action) {
      state.categories = state.categories.map((a) =>
        a.id === action.payload.id ? { ...a, ...action.payload } : a
      );
    },
    removeCategory(state, action) {
      state.categories = state.categories.filter((a) => a.id !== action.payload.id);
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setNextCategoriesLoading(state, action) {
      state.nextcategoryLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setReadyToDelete(state, action) {
      state.readyToDelete = action.payload;
    },
  },
});

export const categoryActions = categorieslice.actions;
export const categoryReducer = categorieslice.reducer;
