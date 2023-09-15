import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchApi } from 'http/http';

export const intakeAddThunk = createAsyncThunk(
  'intake/add',
  async (values, thunkAPI) => {
    try {
      const { data } = await fetchApi.post('/products/intake/', values);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const intakeUpdateThunk = createAsyncThunk(
  'intale/update',
  async (values, thunkAPI) => {
    try {
      const { data } = await fetchApi.put(
        `/products/intake/${values._id}`,
        values
      );
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const intakeGetThunk = createAsyncThunk(
  'intake/get',
  async (_, thunkAPI) => {
    try {
      const { data } = await fetchApi.get('/products/intake');
      console.log('data', data);
      if (!data) {
        return thunkAPI.rejectWithValue('not data');
      }
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
