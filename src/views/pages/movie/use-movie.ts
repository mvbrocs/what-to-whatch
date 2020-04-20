import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useFetchMovies } from 'src/views/pages/hooks';
import { getMoviesByGenre } from 'src/views/pages/utils';
import { RootState } from 'src/state/root-reducer';
import { selectAllMovies, selectMovieByID } from 'src/state/slices/movies';
import { selectUser } from 'src/state/slices/user';

export const useMovie = () => {
  const { id } = useParams();
  const movies = useSelector(selectAllMovies);
  const user = useSelector(selectUser);
  const mainMovie =
    useSelector((state: RootState) => id && selectMovieByID(state, id)) || null;
  const moviesByGenre = getMoviesByGenre(movies, mainMovie?.genre).filter(
    (movie) => movie.id !== mainMovie?.id,
  );

  useFetchMovies();

  return { mainMovie, moviesByGenre, user };
};
