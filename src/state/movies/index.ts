import { moviesSlice } from './movies-slice';
import { moviesThunks } from './movies-thunks';
import { moviesSelectors } from './movies-selectors';

export const moviesReducer = moviesSlice.slice.reducer;
export const { selectMoviesSlice, selectAllGenres, selectMoviesByGenre } = moviesSelectors;
export const { fetchMovies } = moviesThunks;
