// import { createSlice } from "@reduxjs/toolkit";

// const CartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     items: [],
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       const product = action.payload;
//       const existing = state.items.find((item) => item.id === product.id);
//       if (existing) {
//         existing.quantity += 1;
//       } else {
//         state.items.push({ ...product, quantity: 1 });
//       }
//     },
//     removeFromCart: (state, action) => {
//       state.items = state.items.filter((item) => item.id !== action.payload);
//     },
//     clearCart: (state) => {
//       state.items = [];
//     },
//     decreaseQuantity: (state, action) => {
//       const item = state.items.find((i) => i.id === action.payload);
//       if (item && item.quantity > 1) {
//         item.quantity -= 1;
//       } else {
//         state.items = state.items.filter((i) => i.id !== action.payload);
//       }
//     },
//     increaseQuantity: (state, action) => {
//       const item = state.items.find((i) => i.id === action.payload);
//       if (item) {
//         item.quantity += 1;
//       }
//     },
//   },
// });

// export const { addToCart, removeFromCart, clearCart, decreaseQuantity, increaseQuantity } =
//   CartSlice.actions;

// export default CartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: storedCart,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }

      // 👉 Cập nhật localStorage đúng cách
      localStorage.setItem("cartItems", JSON.stringify([...state.items]));
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify([...state.items]));
    },

    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cartItems");
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
      localStorage.setItem("cartItems", JSON.stringify([...state.items]));
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      localStorage.setItem("cartItems", JSON.stringify([...state.items]));
    },
  },
});

export const { addToCart, removeFromCart, clearCart, decreaseQuantity, increaseQuantity } =
  CartSlice.actions;

export default CartSlice.reducer;

