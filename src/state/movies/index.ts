import { slice } from './slice';

export { moviesInitialState, moviesAdapter, fetchMovies } from './slice';

export const moviesReducer = slice.reducer;

export {
  selectAllMovies,
  selectMoviesByGenre,
  selectMoviesSlice,
  selectAllGenres,
  selectMoviesByGenreAndMaxVisible,
  selectAllMoviesIsVisible,
  selectMovieByRandom,
} from './selectors';
