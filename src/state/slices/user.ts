import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Credentials, IUser } from 'src/api/login';
import { api } from 'src/api';
import { RootState } from '../root-reducer';

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
    addMovieToUserList(state, action: PayloadAction<number>) {
      if (state) state.movies.push(action.payload);
    },
    removeMovieFromUserList(state, action: PayloadAction<number>) {
      if (state)
        state.movies = state.movies.filter((movieId) => movieId !== action.payload);
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

export const { addMovieToUserList, removeMovieFromUserList } = slice.actions;
export const userReducer = slice.reducer;

export const selectUser = (state: RootState) => state.user;
