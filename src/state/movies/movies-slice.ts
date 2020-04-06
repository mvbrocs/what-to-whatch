import { createEntityAdapter, createSlice, EntityState, createAsyncThunk } from '@reduxjs/toolkit';

import { moviesAPI } from 'mocks/api/movies';
import { IMovie } from 'mocks/movies';

type SliceState = {
  loaded: boolean;
  loading: boolean;
  error: string | null;
} & EntityState<IMovie>;

export const fetchMovies = createAsyncThunk('movies/getAll', async () => {
  const { data } = await moviesAPI.getAll();
  return data;
});

export const initialState = {
  loaded: false,
  loading: false,
  error: null,
} as SliceState;

export const moviesAdapter = createEntityAdapter<IMovie>();
export const moviesSlice = createSlice({
  name: 'movies',
  initialState: moviesAdapter.getInitialState(initialState),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state: SliceState) => {
      state.loaded = false;
      state.loading = true;
      state.error = null;
      moviesAdapter.setAll(state, []);
    });
    builder.addCase(fetchMovies.fulfilled, (state: SliceState, action) => {
      state.loaded = true;
      state.loading = false;
      moviesAdapter.setAll(state, action.payload);
    });
  },
});
