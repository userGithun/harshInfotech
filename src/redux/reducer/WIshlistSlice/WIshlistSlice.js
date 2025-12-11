import { createSlice } from "@reduxjs/toolkit";
import {
  fetchWishlist,
  addToWishlist,
  removeFromWishlist,
} from "../../action/WishlistAction/WishlistAction";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearWishlist: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload?.data || [];
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to load wishlist";
      })

      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.items.push(action.payload?.data);
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.error = action.payload || "Failed to add item to wishlist";
      })

      .addCase(removeFromWishlist.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.meta.arg 
        );
      })
      .addCase(removeFromWishlist.rejected, (state, action) => {
        state.error = action.payload || "Failed to remove item from wishlist";
      });
  },
});

export const { clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
