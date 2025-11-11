// src/redux/CartSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://68e7a0cd10e3f82fbf3ffe42.mockapi.io/cart";

// ✅ Lấy toàn bộ giỏ hàng từ API
export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  const res = await axios.get(API_URL);
  return res.data;
});

// ✅ Thêm sản phẩm vào giỏ
export const addToCart = createAsyncThunk("cart/addToCart", async (product) => {
  const res = await axios.post(API_URL, { ...product, quantity: 1 });
  return res.data;
});

// ✅ Xóa sản phẩm
export const removeFromCart = createAsyncThunk("cart/removeFromCart", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

// ✅ Cập nhật số lượng
export const updateQuantity = createAsyncThunk(
  "cart/updateQuantity",
  async ({ id, quantity }) => {
    const res = await axios.put(`${API_URL}/${id}`, { quantity });
    return res.data;
  }
);

// ✅ Xóa toàn bộ giỏ hàng
export const clearCart = createAsyncThunk("cart/clearCart", async () => {
  const res = await axios.get(API_URL);
  await Promise.all(res.data.map((item) => axios.delete(`${API_URL}/${item.id}`)));
  return [];
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 📦 Lấy giỏ hàng
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // ➕ Thêm
      .addCase(addToCart.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      // ❌ Xoá
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.items = state.items.filter((i) => i.id !== action.payload);
      })
      // 🔁 Cập nhật
      .addCase(updateQuantity.fulfilled, (state, action) => {
        const index = state.items.findIndex((i) => i.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      // 🧹 Xoá hết
      .addCase(clearCart.fulfilled, (state) => {
        state.items = [];
      });
  },
});

export default cartSlice.reducer;
