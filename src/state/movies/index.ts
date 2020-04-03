import { moviesSlice } from './movies-slice';
import { moviesThunks } from './movies-thunks';
import { moviesSelectors } from './movies-selectors';

export const moviesReducer = moviesSlice.slice.reducer;
export const { selectAllMovies, selectAllGenres, selectMoviesByGenre } = moviesSelectors;
export const { fetchMovies } = moviesThunks;
