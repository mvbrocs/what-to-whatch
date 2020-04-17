import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'src/state/root-reducer';
import { ALL_GENRES } from 'src/state/ui/slice';
import { moviesAdapter } from './slice';

export const selectMoviesSlice = (state: RootState) => state.movies;

export const { selectAll: selectAllMovies } = moviesAdapter.getSelectors(selectMoviesSlice);

export const selectAllGenres = createSelector(selectAllMovies, (movies) => {
  const genres = [ALL_GENRES];

  for (const movie of movies) if (!genres.includes(movie.genre)) genres.push(movie.genre);

  return genres;
});

export const selectMovieByRandom = createSelector(selectAllMovies, (movies) =>
  movies.length ? movies[Math.floor(Math.random() * movies.length)] : null,
);
