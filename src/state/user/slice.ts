import { createSlice } from '@reduxjs/toolkit';

import { login } from './actions';
import { IUser } from 'src/api/login';

type State = IUser | null;

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
