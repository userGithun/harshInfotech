import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../api/api";

export const fetchAccessories = createAsyncThunk(
  "accessories/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/collection-category/accessories`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchAccessoryBySlug = createAsyncThunk(
  "accessories/fetchBySlug",
  async (slug, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/product-slug/${slug}`);
      return response.data;
      console.log(response.data);
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
