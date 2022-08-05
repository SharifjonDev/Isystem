import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/auth-slice";
import { blogSlice } from "./blog/blog-slice";

const store = configureStore({
  reducer: { blog: blogSlice.reducer, auth: authSlice.reducer },
});

export default store;
