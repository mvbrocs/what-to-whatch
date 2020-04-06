import { moviesSlice } from './movies-slice';

export const moviesReducer = moviesSlice.reducer;
export { fetchMovies } from './movies-slice';
export const { incrementMaxVisibleMovies } = moviesSlice.actions;
export {
  selectMoviesSlice,
  selectAllGenres,
  selectMoviesByGenre,
  selectAllMoviesIsVisible,
  selectMoviesByGenreAndMaxVisible,
} from './movies-selectors';
