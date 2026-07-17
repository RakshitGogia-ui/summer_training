import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const existingProduct = state.cart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({
          ...product,
          quantity: 1,
        });
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    increaseQuantity: (state, action) => {
      const item = state.cart.find(
        (product) => product.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    decreaseQuantity: (state, action) => {
      const item = state.cart.find(
        (product) => product.id === action.payload
      );

      if (item) {
        item.quantity -= 1;
      }

      state.cart = state.cart.filter(
        (item) => item.quantity > 0
      );

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;