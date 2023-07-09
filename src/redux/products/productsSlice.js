import { createSlice } from '@reduxjs/toolkit';
import data from '../../data.json';

const productsInitState = data;

const productsSlice = createSlice({
  name: 'products',
  initialState: productsInitState,
  reducers: {
    addProductAction: {
      reducer(state, { payload }) {
        state = [...state, payload];
      },
    },
  },
});

export const { addProductAction } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
