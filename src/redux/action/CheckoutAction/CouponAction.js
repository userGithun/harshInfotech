// src/redux/action/CouponAction/couponThunk.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../api/axiosInstance";

export const verifyCoupon = createAsyncThunk(
  "coupon/verify",
  async ({ data, cartTotal, callback, failed }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/check-coupon", data);

      if (cartTotal < response.data.minimum) {
        return rejectWithValue("Coupon not valid for this total.");
      }

      callback?.();
      return {
        coupon: data.coupon,
        discount: response.data.discount ?? 0,
        minimum: response.data.minimum ?? 0,
      };
    } catch (error) {
      failed?.();
      return rejectWithValue(error.response?.data || "Failed to apply coupon");
    }
  }
);
