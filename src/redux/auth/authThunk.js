import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchApi } from 'http/http';

const setAuthHeader = token => {
  fetchApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const cleareAuthHeader = () => {
  fetchApi.defaults.headers.common.Authorization = '';
};

export const authRegisterThunk = createAsyncThunk(
  'auth/register',
  async (values, thunkAPI) => {
    try {
      const { data } = await fetchApi.post('/users/register', values);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const authLoginThunk = createAsyncThunk(
  'user/login',
  async (values, thunkAPI) => {
    try {
      const { data } = await fetchApi.post('users/login', values);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const authLogoutThunk = createAsyncThunk(
  'user/logout',
  async (_, thunkAPI) => {
    try {
      fetchApi.post('users/logout');
      cleareAuthHeader();
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const authRefresh = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    try {
      const { token } = thunkAPI.getState().auth;
      if (!token) {
        return thunkAPI.rejectWithValue('Is not valid token');
      }
      setAuthHeader(token);
      const res = await fetchApi.get('users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
