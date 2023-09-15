import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchApi } from "http/http";

export const productsFilterThunk = createAsyncThunk(
    'products/filter', async (values, thunkAPI) => {
        try {

            const result = await fetchApi.get(`/products/search/${values}`);
            console.log('search', result);

        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)