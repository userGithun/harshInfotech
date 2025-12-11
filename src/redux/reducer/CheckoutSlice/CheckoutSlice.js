import { createSlice } from "@reduxjs/toolkit";
import {
  checkoutBank,
  checkoutCod,
  makePayment,
} from "../../action/CheckoutAction/CheckoutAction";

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: { loading: false, data: null, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkoutCod.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkoutCod.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(checkoutCod.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(checkoutBank.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkoutBank.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(checkoutBank.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(makePayment.pending, (state) => {
        state.loading = true;
      })
      .addCase(makePayment.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(makePayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default checkoutSlice.reducer;
