import { createSlice } from '@reduxjs/toolkit';
import data from '../../data.json';
import { productsFilterThunk } from './productThunk';

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
  extraReducers: builder => {
    builder
      .addCase(productsFilterThunk.pending, state => {
      state.status = 'lodaing';
      })
      .addCase(productsFilterThunk.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.data = payload;
    })
  }
});

export const { addProductAction, setFilter } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
