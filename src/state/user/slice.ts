import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Credentials, IUser } from 'src/api/login';
import { api } from 'src/api';

type User = IUser & {
  movies: number[];
};

export type UserState = User | null;

export const login = createAsyncThunk('user/login', async (credentials: Credentials) => {
  const { data } = await api.login(credentials);

  return data;
});

export const userInitialState = null as UserState;

const slice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    addMovie(state, action: PayloadAction<number>) {
      state?.movies.push(action.payload);
    },
  },
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

export const { addMovie } = slice.actions;
export const userReducer = slice.reducer;
