import { moviesSlice } from './movies-slice';

export { moviesInitialState } from './movies-slice';
export const moviesReducer = moviesSlice.reducer;
export { fetchMovies } from './movies-slice';
export const { incrementMaxVisibleMovies } = moviesSlice.actions;
export {
  selectMoviesSlice,
  selectAllGenres,
  selectMoviesByGenre,
  selectAllMoviesIsVisible,
  selectMoviesByGenreAndMaxVisible,
  selectMovieByRandom,
} from './movies-selectors';
