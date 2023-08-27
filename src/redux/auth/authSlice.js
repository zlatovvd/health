import { createSlice } from '@reduxjs/toolkit';
import {
  authLoginThunk,
  authLogoutThunk,
  authRegisterThunk,
} from './authThunk';

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
        state.user = { name: null, email: null }
        state.token = '';
        state.isLoggedIn = false;
      })
      .addCase(authLogoutThunk.rejected, state => {
        state.status = 'error';
      });
  },
});

export const authReducer = authSlice.reducer;

//npm export const { authLogIn, authLogOut } = authSlice.actions;

// authRouter.post("/register", register);

// authRouter.post("/login", login);

// authRouter.post("/logout", authenticate, logout);

// authRouter.get("/current", authenticate, current);
