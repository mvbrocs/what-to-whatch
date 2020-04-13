import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { api } from 'api';
import { Credentials, User } from 'api/login';
import { RootState } from 'state/root-reducer';

type State = null | User;

export const login = createAsyncThunk('user/login', async (credentials: Credentials) => {
  const { data } = await api.login(credentials);

  return data;
});

export const userInitialState = null as State;

const slice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => action.payload);
  },
});

export const userReducer = slice.reducer;

export const selectUser = (state: RootState) => state.user;
