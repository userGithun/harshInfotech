import { createSlice } from "@reduxjs/toolkit";

import { fetchCatalogue, fetchCatalogueBySlug } from "../../action/CatalogueAction/CatalogueAction";

const catalogueSlice = createSlice({
  name: "catalogue",
  initialState: {
    items: [],
    selectedCatalogue: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearSelectedCatalogue: (state) => {
      state.selectedCatalogue = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalogue.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCatalogue.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload?.data || [];
      })
      .addCase(fetchCatalogue.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to load catalogue";
      })

      .addCase(fetchCatalogueBySlug.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCatalogueBySlug.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCatalogue = action.payload?.data || null;
      })
      .addCase(fetchCatalogueBySlug.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to load catalogue";
      });
  },
});

export const { clearSelectedCatalogue } = catalogueSlice.actions;
export default catalogueSlice.reducer;
