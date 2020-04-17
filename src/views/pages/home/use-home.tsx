import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectAllGenres,
  selectMoviesSlice,
  selectMovieByRandom,
  selectAllMovies,
} from 'src/state/movies/selectors';
import {
  toggleVideoPlayerFullscreenVisible,
  updateVideoPlayerFullscreenData,
} from 'src/state/ui/actions';
import { GenreClickHandler } from 'src/views/components/genres-list';
import { ALL_GENRES } from 'src/state/ui/slice';
import { useFetchMovies } from 'src/views/pages/hooks';
import { getMoviesByGenre } from 'src/views/pages/utils';

const START_MAX_VISIBLE_MOVIES = 8;
const STEP_MAX_VISIBLE_MOVIES = 20;

export const useHome = () => {
  const genres = useSelector(selectAllGenres);
  const [activeGenre, setActiveGenre] = useState(ALL_GENRES);
  const [maxVisibleMovies, setMaxVisibleMovies] = useState(START_MAX_VISIBLE_MOVIES);
  const { loaded: moviesLoaded } = useSelector(selectMoviesSlice);
  const mainMovie = useSelector(selectMovieByRandom);
  const movies = useSelector(selectAllMovies);
  const moviesByGenre = getMoviesByGenre(movies, activeGenre);
  const moviesByGenreAndMaxVisible = moviesByGenre.slice(0, maxVisibleMovies);
  const allMoviesIsVisible = moviesByGenre.length === moviesByGenreAndMaxVisible.length;
  const dispatch = useDispatch();

  const genreClickHandler: GenreClickHandler = (genre) => (event) => {
    event.preventDefault();
    setActiveGenre(genre);

    if (maxVisibleMovies > START_MAX_VISIBLE_MOVIES) setMaxVisibleMovies(START_MAX_VISIBLE_MOVIES);
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

  useFetchMovies();

  return {
    genres,
    activeGenre,
    moviesByGenreAndMaxVisible,
    moviesLoaded,
    allMoviesIsVisible,
    mainMovie,
    genreClickHandler,
    btnShowMoreClickHandler,
    btnPlayClickHandler,
  };
};
