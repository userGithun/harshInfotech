import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../api/axiosInstance";

export const checkoutCod = createAsyncThunk(
  "checkout/cod",
  async ({ data, callback }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/checkout", data);
      callback?.(); // optional callback
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const checkoutBank = createAsyncThunk(
  "checkout/bank",
  async ({ data, callback }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/checkout", data);
      callback?.();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const makePayment = createAsyncThunk(
  "checkout/makePayment",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "https://gatewaysandbox.nepalpayment.com/Payment/Index",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
