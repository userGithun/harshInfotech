import { createSlice } from "@reduxjs/toolkit";
import {
  registerUser,
  loginUser,
  googleLogin,
  facebookLogin,
  getProfile,
} from "../../action/AuthAction/AuthAction";

const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data.user;
        state.token = action.payload.data.accessToken;
        localStorage.setItem("token", action.payload.data.accessToken);
        localStorage.setItem("refreshToken", action.payload.data.refreshToken);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data.user;
        state.token = action.payload.data.accessToken;
        localStorage.setItem("token", action.payload.data.accessToken);
        localStorage.setItem("refreshToken", action.payload.data.refreshToken);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Google login
      .addCase(googleLogin.fulfilled, (state, action) => {
        state.user = action.payload.data.user;
        state.token = action.payload.data.accessToken;
        localStorage.setItem("token", action.payload.data.accessToken);
        localStorage.setItem("refreshToken", action.payload.data.refreshToken);
      })

      // Facebook login
      .addCase(facebookLogin.fulfilled, (state, action) => {
        state.user = action.payload.data.user;
        state.token = action.payload.data.accessToken;
        localStorage.setItem("token", action.payload.data.accessToken);
        localStorage.setItem("refreshToken", action.payload.data.refreshToken);
      })

      // Get profile
      .addCase(getProfile.fulfilled, (state, action) => {
        state.user = action.payload.data.user;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
