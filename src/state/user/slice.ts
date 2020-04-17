import { createSlice } from '@reduxjs/toolkit';

import { login } from './actions';
import { IUser } from 'src/api/login';

type User = IUser & {
  movies: number[];
};

type State = User | null;

export const userInitialState = null as State;

const slice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      const { avatar_url, email, id, name } = action.payload;

      return {
        movies: [],
        avatar_url,
        email,
        id,
        name,
      };
    });
  },
});

export const userReducer = slice.reducer;
