import { IFilm } from 'src/api/films';
import { ALL_GENRES } from 'src/state/slices/ui';

export const getMoviesByGenre = (movies: IFilm[], genre?: string) => {
  if (genre === ALL_GENRES) return movies;

  return movies.filter((movie) => movie.genre === genre);
};
