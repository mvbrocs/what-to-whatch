import { createEntityAdapter, createSlice, EntityState, EntityAdapter } from '@reduxjs/toolkit';

import { IMovie } from 'mocks/movies';
import { moviesThunks } from './movies-thunks';

type SliceState = {
  loaded: boolean;
  loading: boolean;
  error: string | null;
} & EntityState<IMovie>;

const initialState = {
  loaded: false,
  loading: false,
  error: null,
} as SliceState;

const { fetchMovies } = moviesThunks;
const moviesAdapter: EntityAdapter<IMovie> = createEntityAdapter();

export const moviesSlice = {
  adapter: moviesAdapter,
  slice: createSlice({
    name: 'movies',
    initialState: moviesAdapter.getInitialState(initialState),
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchMovies.pending, (state: SliceState) => {
        state.loaded = false;
        state.loading = true;
        state.error = null;
      });
      builder.addCase(fetchMovies.fulfilled, (state: SliceState, action) => {
        state.loaded = true;
        state.loading = false;
        moviesAdapter.setAll(state, action.payload);
      });
    },
  }),
};
