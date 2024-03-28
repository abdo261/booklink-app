import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
    loading: false,
    errors: null,
  },
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setErrors(state, action) {
      state.errors = action.payload;
    },
  },
});
export const authAction = authSlice.actions;
export const authreducer = authSlice.reducer;
