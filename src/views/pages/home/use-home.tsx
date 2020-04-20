import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';

import {
  selectAllGenres,
  selectMoviesSlice,
  selectAllMovies,
} from 'src/state/slices/movies';
import {
  ALL_GENRES,
  toggleVideoPlayerFullscreenVisible,
  updateVideoPlayerFullscreenData,
} from 'src/state/slices/ui';
import { GenreClickHandler } from 'src/views/components/genres-list';
import { useFetchMovies } from 'src/views/pages/hooks';
import { getMoviesByGenre } from 'src/views/pages/utils';
import {
  addMovieToUserList,
  removeMovieFromUserList,
  selectUser,
} from 'src/state/slices/user';
import { Path } from 'src/routes';
import { IFilm } from 'src/api/films';

const START_MAX_VISIBLE_MOVIES = 8;
const STEP_MAX_VISIBLE_MOVIES = 20;

const getRandomMovie = (movies: IFilm[]) =>
  movies.length ? movies[Math.floor(Math.random() * movies.length)] : null;

export const useHome = () => {
  const genres = useSelector(selectAllGenres);
  const [activeGenre, setActiveGenre] = useState(ALL_GENRES);
  const [maxVisibleMovies, setMaxVisibleMovies] = useState(START_MAX_VISIBLE_MOVIES);

  const { loaded: moviesLoaded } = useSelector(selectMoviesSlice);
  const movies = useSelector(selectAllMovies);
  const [mainMovie] = useState(getRandomMovie(movies));
  const moviesByGenre = getMoviesByGenre(movies, activeGenre);
  const moviesByGenreAndMaxVisible = moviesByGenre.slice(0, maxVisibleMovies);
  const allMoviesIsVisible = moviesByGenre.length === moviesByGenreAndMaxVisible.length;
  const user = useSelector(selectUser);
  const mainMovieInList = mainMovie && user?.movies.includes(mainMovie.id);
  const dispatch = useDispatch();

  const genreClickHandler: GenreClickHandler = (genre) => (event) => {
    event.preventDefault();
    setActiveGenre(genre);

    if (maxVisibleMovies > START_MAX_VISIBLE_MOVIES)
      setMaxVisibleMovies(START_MAX_VISIBLE_MOVIES);
  };

  const btnShowMoreClickHandler = () =>
    setMaxVisibleMovies((prevMax) => prevMax + STEP_MAX_VISIBLE_MOVIES);

  const btnPlayClickHandler = () => {
    dispatch(
      updateVideoPlayerFullscreenData(
        mainMovie && {
          background_color: mainMovie.background_color,
          background_image: mainMovie.background_image,
          name: mainMovie.name,
          video_link: mainMovie.video_link,
        },
      ),
    );
    dispatch(toggleVideoPlayerFullscreenVisible());
  };

  const btnAddClickHandler = () => {
    if (user && mainMovie) {
      if (mainMovieInList) {
        dispatch(removeMovieFromUserList(mainMovie.id));
      } else {
        dispatch(addMovieToUserList(mainMovie.id));
      }
    } else {
      dispatch(push(Path.SIGN_IN));
    }
  };

  useFetchMovies();

  return {
    genres,
    activeGenre,
    moviesByGenreAndMaxVisible,
    moviesLoaded,
    allMoviesIsVisible,
    mainMovie,
    user,
    mainMovieInList,
    genreClickHandler,
    btnShowMoreClickHandler,
    btnPlayClickHandler,
    btnAddClickHandler,
  };
};
