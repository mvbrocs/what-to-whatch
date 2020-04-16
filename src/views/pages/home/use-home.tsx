import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchMovies } from 'src/state/movies/actions';
import {
  selectAllGenres,
  selectMoviesByGenreAndMaxVisible,
  selectMoviesSlice,
  selectAllMoviesIsVisible,
  selectMovieByRandom,
} from 'src/state/movies/selectors';
import {
  setGenre,
  setMaxVisibleMovies,
  toggleVideoPlayerFullscreenVisible,
  updateVideoPlayerFullscreenData,
} from 'src/state/ui/actions';
import { selectGenre, selectMaxVisibleMovies } from 'src/state/ui/selectors';
import { GenreClickHandler } from 'src/views/components/genres-list';
import { ALL_GENRES, MAX_VISIBLE_MOVIES } from 'src/state/ui/slice';

export const useHome = () => {
  const genres = useSelector(selectAllGenres);
  const activeGenre = useSelector(selectGenre);
  const movies = useSelector(selectMoviesByGenreAndMaxVisible);
  const allMoviesIsVisible = useSelector(selectAllMoviesIsVisible);
  const maxVisibleMovies = useSelector(selectMaxVisibleMovies);
  const { loaded: moviesLoaded, loading: moviesLoading } = useSelector(selectMoviesSlice);
  const mainMovie = useSelector(selectMovieByRandom);
  const dispatch = useDispatch();

  const genreClickHandler: GenreClickHandler = (genre) => (event) => {
    event.preventDefault();

    dispatch(setGenre(genre));

    if (maxVisibleMovies > MAX_VISIBLE_MOVIES) dispatch(setMaxVisibleMovies(MAX_VISIBLE_MOVIES));
  };

  const btnShowMoreClickHandler = () => dispatch(setMaxVisibleMovies(maxVisibleMovies + 20));

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

  useEffect(() => {
    if (activeGenre !== ALL_GENRES) dispatch(setGenre(ALL_GENRES));
    // change to default genre, when come from another page
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
