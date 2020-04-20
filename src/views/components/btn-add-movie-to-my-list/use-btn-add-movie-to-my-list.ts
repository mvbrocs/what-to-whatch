import { push } from 'connected-react-router';
import { useDispatch, useSelector } from 'react-redux';

import {
  addMovieToUserList,
  removeMovieFromUserList,
  selectUser,
} from 'src/state/slices/user';
import { Path } from 'src/routes';
import { IFilm } from 'src/api/films';

export const useBtnAddMovieToMyList = (movie: IFilm | null) => {
  const user = useSelector(selectUser);
  const movieInList = movie && user?.movies.includes(movie.id);
  const dispatch = useDispatch();

  const clickHandler = () => {
    if (user && movie) {
      if (movieInList) {
        dispatch(removeMovieFromUserList(movie.id));
      } else {
        dispatch(addMovieToUserList(movie.id));
      }
    } else {
      dispatch(push(Path.SIGN_IN));
    }
  };

  return { movieInList, clickHandler };
};
