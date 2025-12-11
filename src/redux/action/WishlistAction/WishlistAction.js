import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../api/api";
import axiosInstance from "../../../api/axiosInstance";

export const fetchWishlist = createAsyncThunk(
  "wishlist/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`${BASE_URL}/wishlists`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const addToWishlist = createAsyncThunk(
  "wishlist/add",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`${BASE_URL}/wishlist/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const removeFromWishlist = createAsyncThunk(
  "wishlist/remove",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`${BASE_URL}/wishlist/${id}`);
      return { id, ...response.data };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
