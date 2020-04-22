import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
} from '@reduxjs/toolkit';

import { ALL_GENRES } from 'src/state/slices/ui';
import { api } from 'src/api';
import { IFilm } from 'src/api/films';
import { RootState } from 'src/state/root-reducer';
import { AppThunk } from 'src/state/store';

type State = {
  loaded: boolean;
  loading: boolean;
  didInvalidate: boolean;
  error: string | null;
} & EntityState<IFilm>;

const fetchMovies = createAsyncThunk('movies/getAll', async () => {
  const { data } = await api.films.getAll();

  return data;
});

const shouldFetchMovies = (state: RootState) => {
  const movies = state.movies;

  if (!movies.loaded) return true;

  if (movies.loading) return false;

  return movies.didInvalidate;
};

export const fetchMoviesIfNeeded = (): AppThunk => (dispatch, getState) => {
  if (shouldFetchMovies(getState())) return dispatch(fetchMovies());

  return Promise.resolve();
};

export const moviesInitialState = {
  loaded: false,
  loading: false,
  didInvalidate: false,
  error: null,
} as State;

export const moviesAdapter = createEntityAdapter<IFilm>();

const slice = createSlice({
  name: 'movies',
  initialState: moviesAdapter.getInitialState(moviesInitialState),
  reducers: {
    invalidate(state) {
      state.didInvalidate = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state: State) => {
      state.loaded = false;
      state.loading = true;
      state.error = null;
      state.didInvalidate = false;
      moviesAdapter.setAll(state, []);
    });
    builder.addCase(fetchMovies.fulfilled, (state: State, action) => {
      state.loaded = true;
      state.loading = false;
      moviesAdapter.setAll(state, action.payload);
    });
  },
});

export const moviesReducer = slice.reducer;

export const { invalidate: invalidateMovies } = slice.actions;

export const selectMoviesSlice = (state: RootState) => state.movies;

export const {
  selectAll: selectAllMovies,
  selectById: selectMovieByID,
} = moviesAdapter.getSelectors(selectMoviesSlice);

export const selectAllGenres = createSelector(selectAllMovies, (movies) => {
  const genres = [ALL_GENRES];

  for (const movie of movies) if (!genres.includes(movie.genre)) genres.push(movie.genre);

  return genres;
});
