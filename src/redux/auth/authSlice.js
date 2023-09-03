import { createSlice } from '@reduxjs/toolkit';
import {
  authLoginThunk,
  authLogoutThunk,
  authRefresh,
  authRegisterThunk,
} from './authThunk';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authInitialState = {
  status: 'idle',
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(authRegisterThunk.pending, state => {
        state.status = 'loading';
      })
      .addCase(authRegisterThunk.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authRegisterThunk.rejected, state => {
        state.status = 'error';
      })
      .addCase(authLoginThunk.pending, state => {
        state.status = 'loading';
      })
      .addCase(authLoginThunk.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authLoginThunk.rejected, state => {
        state.status = 'error';
      })
      .addCase(authLogoutThunk.pending, state => {
        state.status = 'loading';
      })
      .addCase(authLogoutThunk.fulfilled, state => {
        state.status = 'success';
        state.user = { name: null, email: null };
        state.token = '';
        state.isLoggedIn = false;
      })
      .addCase(authLogoutThunk.rejected, state => {
        state.status = 'error';
      })
      .addCase(authRefresh.pending, state => {
        state.status = 'loading';
        state.isRefreshing = true;
      })
      .addCase(authRefresh.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(authRefresh.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

const persistConfig = {
  key: 'Auth',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
