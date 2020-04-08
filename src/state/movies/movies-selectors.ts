import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'state/root-reducer';
import { ALL_GENRES, selectGenre } from 'state/genre';
import { moviesAdapter } from './movies-slice';

export const selectMoviesSlice = (state: RootState) => state.movies;

export const { selectAll: selectAllMovies } = moviesAdapter.getSelectors(selectMoviesSlice);

export const selectMoviesByGenre = createSelector(selectAllMovies, selectGenre, (movies, genre) =>
  genre === ALL_GENRES ? movies : movies.filter((movie) => movie.genre === genre),
);

export const selectAllGenres = createSelector(selectAllMovies, (movies) => {
  const genres = [ALL_GENRES];

  for (const movie of movies) if (!genres.includes(movie.genre)) genres.push(movie.genre);

  return genres;
});

export const selectMaxVisibleMovies = createSelector(
  selectMoviesSlice,
  ({ maxVisible }) => maxVisible,
);

export const selectMoviesByGenreAndMaxVisible = createSelector(
  selectMoviesByGenre,
  selectMaxVisibleMovies,
  (movies, maxVisibleMovies) => (maxVisibleMovies > 0 ? movies.slice(0, maxVisibleMovies) : []),
);

export const selectAllMoviesIsVisible = createSelector(
  selectMoviesByGenre,
  selectMaxVisibleMovies,
  (movies, maxVisibleMovies) => maxVisibleMovies >= movies.length,
);

export const selectMovieByRandom = createSelector(selectAllMovies, (movies) =>
  movies.length ? movies[Math.floor(Math.random() * movies.length)] : null,
);
