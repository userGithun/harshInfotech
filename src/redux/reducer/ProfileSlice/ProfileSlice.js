import { createSlice } from "@reduxjs/toolkit";
import {
  getProfile,
  updateProfile,
  updateProfilePicture,
  changeFullName,
  changePhoneNumber,
  changeEmail,
  changePassword,
} from "../../action/ProfileAction/ProfileAction";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearProfile: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to load profile";
      })
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = { ...state.data, ...action.payload };
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to update profile";
      })
      .addCase(updateProfilePicture.fulfilled, (state, action) => {
        state.data = { ...state.data, image: action.payload.image };
      })
      .addCase(changeFullName.fulfilled, (state, action) => {
        state.data = { ...state.data, fullName: action.payload.fullName };
      })
      .addCase(changePhoneNumber.fulfilled, (state, action) => {
        state.data = {
          ...state.data,
          phoneNumber: action.payload.phoneNumber,
          countryCode: action.payload.countryCode,
        };
      })
      .addCase(changeEmail.fulfilled, (state, action) => {
        state.data = { ...state.data, email: action.payload.email };
      })  
      .addCase(changePassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.loading = false;
        state.successMessage = "Password updated successfully!";
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.data || "Failed to change password";
      });
  },
});

export const { clearProfile } = profileSlice.actions;
export default profileSlice.reducer;
