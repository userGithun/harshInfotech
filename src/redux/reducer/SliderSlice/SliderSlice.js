import { createSlice } from "@reduxjs/toolkit";
import { fetchSlider } from "../../action/SliderAction/SliderAction";

const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearSlider: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSlider.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSlider.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload?.data || [];
      })
      .addCase(fetchSlider.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to load slider";
      });
  },
});

export const { clearSlider } = sliderSlice.actions;
export default sliderSlice.reducer;
