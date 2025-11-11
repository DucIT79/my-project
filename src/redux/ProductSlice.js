import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 🔗 API của bạn
const API_URL = "https://68e7a0cd10e3f82fbf3ffe42.mockapi.io/fruit";

// ✅ Action lấy toàn bộ danh sách sản phẩm (Giữ nguyên)
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const res = await axios.get(API_URL);
    return res.data;
});

const productSlice = createSlice({
    name: "products",
    initialState: {
        list: [],
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,

        // ✅ 1. THÊM STATE CHO VIỆC LỌC/SẮP XẾP
        searchTerm: '',
        sortOrder: '', // 'asc', 'desc', ''
        filterPrice: 500000, // Giá max mặc định, bạn có thể đổi
    },

    // ✅ 2. THÊM REDUCERS ĐỂ THAY ĐỔI CÁC STATE TRÊN
    reducers: {
        // Action khi người dùng gõ vào ô tìm kiếm
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        // Action khi người dùng chọn sắp xếp (tăng/giảm)
        setSortOrder: (state, action) => {
            state.sortOrder = action.payload;
        },
        // Action khi người dùng kéo thanh lọc giá
        setFilterPrice: (state, action) => {
            state.filterPrice = action.payload;
        },
    },

    // ✅ 3. EXTRA REDUCERS (Giữ nguyên)
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.list = action.payload; // Lưu danh sách sản phẩm
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

// ✅ 4. EXPORT CÁC ACTION MỚI ĐỂ COMPONENT CÓ THỂ DISPATCH
export const { setSearchTerm, setSortOrder, setFilterPrice } = productSlice.actions;

export default productSlice.reducer;