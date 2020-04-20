import { useSelector } from 'react-redux';
import { isDefined } from 'ts-is-present';

import { selectUser } from 'src/state/slices/user';
import { selectAllMovies } from 'src/state/slices/movies';

export const useMyList = () => {
  const user = useSelector(selectUser);
  const movies = useSelector(selectAllMovies);
  const userMovies =
    user?.movies.map((movieID) => movies.find((movie) => movie.id === movieID)) || [];
  const existUserMovies = userMovies.filter(isDefined);

  return { user, existUserMovies };
};
