import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./Slices/cartSlice"; // Import cartSlice with curly braces

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer, // Use cartSlice.reducer directly
  },
});
