import { createSelector } from '@reduxjs/toolkit';

import { moviesSlice } from './movies-slice';
import { RootState } from 'state/root-reducer';
import { selectGenre, ALL_GENRES } from 'state/genre';

const selectMoviesSlice = (state: RootState) => state.movies;
const { selectAll: selectAllMovies } = moviesSlice.adapter.getSelectors(selectMoviesSlice);

export const moviesSelectors = {
  selectMoviesSlice,
  selectMoviesByGenre: createSelector(selectAllMovies, selectGenre, (movies, genre) =>
    genre === ALL_GENRES ? movies : movies.filter((movie) => movie.genre === genre),
  ),
  selectAllGenres: createSelector(selectAllMovies, (movies) => {
    const genres = [ALL_GENRES];

    for (const movie of movies) if (!genres.includes(movie.genre)) genres.push(movie.genre);

    return genres;
  }),
};
