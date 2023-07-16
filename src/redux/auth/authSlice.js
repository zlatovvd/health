import { createSlice } from '@reduxjs/toolkit';

const authInitialState = {
  isLoggedIn: true,
  user: {
    email: "",
    password: "",
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    authLogIn: {
      reducer(state, { payload }) {
        state.isLoggedIn = true;
        state.user = payload;
      },
    },
    authLogOut: {
      reducer(state, { payload }) {
        state.isLoggedIn = false;
        state.user = null;
      },
    },
  },
});

export const authReducer = authSlice.reducer;

export const { authLogIn, authLogOut } = authSlice.actions;
