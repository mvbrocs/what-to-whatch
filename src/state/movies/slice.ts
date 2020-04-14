import { createEntityAdapter, createSlice, createAsyncThunk, EntityState } from '@reduxjs/toolkit';

import { api } from 'src/api';
import { IFilm } from 'src/api/films';

type State = {
  loaded: boolean;
  loading: boolean;
  error: string | null;
} & EntityState<IFilm>;

export const moviesInitialState = {
  loaded: false,
  loading: false,
  error: null,
} as State;

export const fetchMovies = createAsyncThunk('movies/getAll', async () => {
  const { data } = await api.films.getAll();

  return data;
});

export const moviesAdapter = createEntityAdapter<IFilm>();

export const slice = createSlice({
  name: 'movies',
  initialState: moviesAdapter.getInitialState(moviesInitialState),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state: State) => {
      state.loaded = false;
      state.loading = true;
      state.error = null;
      moviesAdapter.setAll(state, []);
    });
    builder.addCase(fetchMovies.fulfilled, (state: State, action) => {
      state.loaded = true;
      state.loading = false;
      moviesAdapter.setAll(state, action.payload);
    });
  },
});
