import { createSlice } from '@reduxjs/toolkit';
import data from '../../data.json';

const productsInitState = {
  data,
  filter: '',
} 

const productsSlice = createSlice({
  name: 'products',
  initialState: productsInitState,
  reducers: {
    addProductAction: {
      reducer(state, { payload }) {
        state = [...state, payload];
      },
    },
    setFilter: {
      reducer(state, {payload}){
        state.filter = payload;
      }
    }
  },
});

export const { addProductAction, setFilter } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
