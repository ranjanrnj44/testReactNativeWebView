//createSlice
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: []
  },
  reducers: {
    add: (state, payload) => {
      state.cart = [...state.cart, payload];
    },
    remove: (state, payload) => {
      console.log(payload.payload);
      //console.log(state.cart);
      let remaining = state.cart.filter(
        (item) => item.payload.id !== payload.payload
      );
      state.cart = remaining;
    }
  }
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
