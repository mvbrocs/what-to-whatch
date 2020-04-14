import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchMovies,
  selectAllGenres,
  selectMoviesByGenreAndMaxVisible,
  selectMoviesSlice,
  selectAllMoviesIsVisible,
  selectMovieByRandom,
} from 'src/state/movies';
import {
  setGenre,
  incrementMaxVisibleMovies,
  toggleVideoPlayerFullscreenVisible,
  updateVideoPlayerFullscreenData,
  selectGenre,
} from 'src/state/ui';
import { GenreClickHandler } from 'src/views/components/genres-list';

export const useHome = () => {
  const genres = useSelector(selectAllGenres);
  const activeGenre = useSelector(selectGenre);
  const movies = useSelector(selectMoviesByGenreAndMaxVisible);
  const allMoviesIsVisible = useSelector(selectAllMoviesIsVisible);
  const { loaded: moviesLoaded, loading: moviesLoading } = useSelector(selectMoviesSlice);
  const mainMovie = useSelector(selectMovieByRandom);
  const dispatch = useDispatch();

  const genreClickHandler: GenreClickHandler = (genre) => (event) => {
    event.preventDefault();
    dispatch(setGenre(genre));
  };

  const btnShowMoreClickHandler = () => dispatch(incrementMaxVisibleMovies(20));

  const btnPlayClickHandler = () => {
    dispatch(toggleVideoPlayerFullscreenVisible());

    if (mainMovie) {
      dispatch(
        updateVideoPlayerFullscreenData({
          background_color: mainMovie.background_color,
          background_image: mainMovie.background_image,
          name: mainMovie.name,
          video_link: mainMovie.video_link,
        }),
      );
    }
  };

  useEffect(() => {
    if (!moviesLoaded && !moviesLoading) dispatch(fetchMovies());
  }, [dispatch, moviesLoaded, moviesLoading]);

  return {
    genres,
    activeGenre,
    movies,
    moviesLoaded,
    allMoviesIsVisible,
    mainMovie,
    genreClickHandler,
    btnShowMoreClickHandler,
    btnPlayClickHandler,
  };
};
