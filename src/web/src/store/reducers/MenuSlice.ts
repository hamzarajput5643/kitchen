import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface MenuCategory {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

interface CategoriesState {
    categories: MenuCategory[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

const initialState: CategoriesState = {
    categories: [],
    status: "idle",
    error: null,
};

export const fetchCategories = createAsyncThunk(
    "categories/fetchCategories",
    async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response);
        return response.data as MenuCategory[];
    }
);

// Create the slice
const menuSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.categories = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message ?? "Something went wrong";
            });
    },
});

export default menuSlice.reducer;