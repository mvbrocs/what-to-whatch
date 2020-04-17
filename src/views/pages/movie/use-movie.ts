import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectAllMovies } from 'src/state/movies/selectors';
import { useFetchMovies } from 'src/views/pages/hooks';
import { getMoviesByGenre } from 'src/views/pages/utils';

export const useMovie = () => {
  const { id } = useParams();
  const movies = useSelector(selectAllMovies);
  const mainMovie = movies.find((movie) => movie.id.toString() === id);
  const moviesByGenre = getMoviesByGenre(movies, mainMovie?.genre).filter(
    (movie) => movie.id !== mainMovie?.id,
  );

  useFetchMovies();

  return { mainMovie, moviesByGenre };
};
