import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { goBack } from 'connected-react-router';

import { api } from 'src/api';
import { Credentials, User } from 'src/api/login';
import { RootState } from 'src/state/root-reducer';

type State = null | User;

export const login = createAsyncThunk(
  'user/login',
  async (credentials: Credentials, { dispatch }) => {
    const { data } = await api.login(credentials);

    dispatch(goBack());

    return data;
  },
);

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
