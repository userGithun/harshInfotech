import { createSlice } from "@reduxjs/toolkit";
import { fetchGallery, fetchGalleryBySlug } from "../../action/GalleryAction/GalleryAction";


const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    items: [],
    selectedGallery: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearSelectedGallery: (state) => {
      state.selectedGallery = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGallery.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGallery.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload?.data || [];
      })
      .addCase(fetchGallery.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to load products";
      })

      .addCase(fetchGalleryBySlug.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGalleryBySlug.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedGallery = action.payload?.data || null;
      })
      .addCase(fetchGalleryBySlug.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to load product";
      });
  },
});

export const { clearSelectedGallery } = gallerySlice.actions;
export default gallerySlice.reducer;
