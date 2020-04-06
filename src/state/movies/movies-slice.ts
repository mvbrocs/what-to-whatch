import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk,
  EntityState,
  PayloadAction,
  CaseReducer,
} from '@reduxjs/toolkit';

import { mockMoviesAPI } from 'mocks/api/mock-movies-api';
import { IMovie } from 'mocks/mock-movies';

type SliceState = {
  loaded: boolean;
  loading: boolean;
  error: string | null;
  maxVisible: number;
} & EntityState<IMovie>;

export const fetchMovies = createAsyncThunk('movies/getAll', async () => {
  const { data } = await mockMoviesAPI.getAll();
  return data;
});

const incrementMaxVisibleMovies: CaseReducer<SliceState, PayloadAction<number>> = (
  state,
  action,
) => {
  state.maxVisible += action.payload;
};

export const initialState = {
  loaded: false,
  loading: false,
  error: null,
  maxVisible: 8,
} as SliceState;

export const moviesAdapter = createEntityAdapter<IMovie>();
export const moviesSlice = createSlice({
  name: 'movies',
  initialState: moviesAdapter.getInitialState(initialState),
  reducers: {
    incrementMaxVisibleMovies,
  },
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
