import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'state/root-reducer';
import { ALL_GENRES, selectGenre } from 'state/genre';
import { moviesAdapter } from './movies-slice';

export const selectMoviesSlice = (state: RootState) => state.movies;

const { selectAll: selectAllMovies } = moviesAdapter.getSelectors(selectMoviesSlice);

export const selectMoviesByGenre = createSelector(selectAllMovies, selectGenre, (movies, genre) =>
  genre === ALL_GENRES ? movies : movies.filter((movie) => movie.genre === genre),
);

export const selectAllGenres = createSelector(selectAllMovies, (movies) => {
  const genres = [ALL_GENRES];

  for (const movie of movies) if (!genres.includes(movie.genre)) genres.push(movie.genre);

  return genres;
});
