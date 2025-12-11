import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../api/axiosInstance";

export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/user/profile");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateProfile = createAsyncThunk(
  "profile/updateProfile",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.patch("/user", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateProfilePicture = createAsyncThunk(
  "profile/updateProfilePicture",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.patch("/user/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const changeFullName = createAsyncThunk(
  "profile/changeFullName",
  async (fullName, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.patch("/user", { fullName });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const changePhoneNumber = createAsyncThunk(
  "profile/changePhoneNumber",
  async ({ phoneNumber, countryCode }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.patch("/user", {
        phoneNumber,
        countryCode,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const changeEmail = createAsyncThunk(
  "profile/changeEmail",
  async (email, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.patch("/user", { email });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const changePassword = createAsyncThunk(
  "profile/changePassword",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.patch("user/password-change", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);