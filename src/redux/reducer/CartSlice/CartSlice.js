import { createSlice } from "@reduxjs/toolkit";
import { addToCart, fetchCart, removeFromCart, updateCart } from "../../action/CartAction/CartAction";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload?.data || [];
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to load cart";
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.error = action.payload || "Failed to add item to cart";
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.meta.arg);
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.error = action.payload || "Failed to remove item from cart";
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        const updatedItem = action.payload;
        const index = state.items.findIndex((i) => i.id === updatedItem.id);
        if (index !== -1) {
          state.items[index] = { ...state.items[index], ...updatedItem };
        }
      })
      .addCase(updateCart.rejected, (state, action) => {
        state.error = action.payload || "Failed to update cart";
      });
  },
});

export default cartSlice.reducer;
