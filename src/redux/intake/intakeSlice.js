import { intakeAddThunk, intakeGetThunk, intakeUpdateThunk } from './intakeThunk';

const { createSlice } = require('@reduxjs/toolkit');

const initIntake = {
  status: 'idle',
  isLoading: false,
  isUpdating: false,
  personInfo: {
    height: '',
    age: '',
    cweight: '',
    dweight: '',
    typeblood: 1,
  },
};

const intakeSlice = createSlice({
  name: 'intake',
  initialState: initIntake,
  reducers: {
    addPersonInfo: {
      reducer(state, { payload }) {
        state.personInfo = payload;
      },
    },
  },
  extraReducers: builder => {
    builder
      .addCase(intakeAddThunk.pending, state => {
        state.status = 'loading';
      })
      .addCase(intakeAddThunk.fulfilled, (state, { payload }) => {
        state.status = 'success';
        console.log('payload', payload);
        state.personInfo = payload;
      })
      .addCase(intakeAddThunk.rejected, state => {
        state.status = 'error';
      })
      .addCase(intakeUpdateThunk.pending, state => {
        state.status = 'loading';
        state.isUpdating = true;
      })
      .addCase(intakeUpdateThunk.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.isUpdating = false;
        state.personInfo = payload;
      })
      .addCase(intakeUpdateThunk.rejected, state => {
        state.status = 'errer';
        state.isUpdating = false;
      })
      .addCase(intakeGetThunk.pending, state => {
        state.status = 'loading';
        state.isLoading = true;
      })
      .addCase(intakeGetThunk.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.personInfo = payload;
        console.log('thunk', payload);
        state.isLoading = false;
      })
      .addCase(intakeGetThunk.rejected, state => {
        state.status = 'error';
        state.isLoading = false;
      });
  },
});

export const intakeReducer = intakeSlice.reducer;
export const { addPersonInfo } = intakeSlice.actions;
