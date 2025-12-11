import { createSlice } from "@reduxjs/toolkit";
import {
  fetchOffTheRack,
  fetchOffTheRackBySlug,
} from "../../action/OffTheRackAction/OffTheRackAction";

const offTheRackSlice = createSlice({
  name: "offTheRack",
  initialState: {
    items: [],
    selectedProduct: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffTheRack.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOffTheRack.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload?.data || [];
      })
      .addCase(fetchOffTheRack.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to load products";
      })

      .addCase(fetchOffTheRackBySlug.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOffTheRackBySlug.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload?.data || null;
      })
      .addCase(fetchOffTheRackBySlug.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to load product";
      });
  },
});

export const { clearSelectedProduct } = offTheRackSlice.actions;
export default offTheRackSlice.reducer;
