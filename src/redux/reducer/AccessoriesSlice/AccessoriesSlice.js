import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAccessories,
  fetchAccessoryBySlug,
} from "../../action/AccessoriesAction/AccessoriesAction";

const accessorySlice = createSlice({
  name: "accessory",
  initialState: {
    items: [],
    selectedAccessory: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearSelectedAccessory: (state) => {
      state.selectedAccessory = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAccessories.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload?.data || [];
      })
      .addCase(fetchAccessories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to load products";
      })

      .addCase(fetchAccessoryBySlug.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAccessoryBySlug.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedAccessory = action.payload?.data || null;
      })
      .addCase(fetchAccessoryBySlug.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to load product";
      });
  },
});

export const { clearSelectedAccessory } = accessorySlice.actions;
export default accessorySlice.reducer;
