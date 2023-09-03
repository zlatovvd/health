import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchApi } from "http/http";

export const intakeAddThunk = createAsyncThunk(
    'intake/add', async (values, thunkAPI) => {
        try {
            const result = await fetchApi.post('/products/intake/', values);
            console.log(result.data);
            return result.data;

    } catch (error) {
    thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const intakeUpdateThunk = createAsyncThunk(
    'intale/update', async (userId, values, thunkAPI) => {
        try {
            const result = await fetchApi.put(`/intake/${userId}`, values);
            console.log(result);
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const intakeGetThunk = createAsyncThunk(
    'intake/get', async (_, thunkAPI) => {
        try {
            const { data } = await fetchApi.get('/products/intake');
            console.log(data);
            if (!data) {
                console.log('thunk reject');
               return thunkAPI.rejectWithValue('not data');
                //throw new Error({ message: 'not data' });
            }
            console.log('after vdata');
            return data;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
)