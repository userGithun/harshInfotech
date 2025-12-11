// src/redux/slice/couponSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { verifyCoupon } from "../../action/CheckoutAction/CouponAction";

const couponSlice = createSlice({
  name: "coupon",
  initialState: { data: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(verifyCoupon.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyCoupon.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(verifyCoupon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default couponSlice.reducer;
