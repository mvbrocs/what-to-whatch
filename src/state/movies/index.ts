import { moviesSlice } from './movies-slice';

export { fetchMovies } from './movies-slice';
export const moviesReducer = moviesSlice.reducer;
export { selectMoviesSlice, selectAllGenres, selectMoviesByGenre } from './movies-selectors';
