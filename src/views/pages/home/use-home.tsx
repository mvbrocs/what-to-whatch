import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
  selectAllGenres,
  selectMoviesSlice,
  selectAllMovies,
} from 'src/state/slices/movies';
import { ALL_GENRES } from 'src/state/slices/ui';
import { GenreClickHandler } from 'src/views/components/genres-list';
import { useFetchMovies } from 'src/views/pages/hooks';
import { getMoviesByGenre } from 'src/views/pages/utils';
import { selectUser } from 'src/state/slices/user';
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
  const [mainMovie, setMainMovie] = useState(getRandomMovie(movies));
  const moviesByGenre = getMoviesByGenre(movies, activeGenre);
  const moviesByGenreAndMaxVisible = moviesByGenre.slice(0, maxVisibleMovies);
  const allMoviesIsVisible = moviesByGenre.length === moviesByGenreAndMaxVisible.length;
  const user = useSelector(selectUser);

  const genreClickHandler: GenreClickHandler = (genre) => (event) => {
    event.preventDefault();
    setActiveGenre(genre);

    if (maxVisibleMovies > START_MAX_VISIBLE_MOVIES)
      setMaxVisibleMovies(START_MAX_VISIBLE_MOVIES);
  };

  const btnShowMoreClickHandler = () =>
    setMaxVisibleMovies((prevMax) => prevMax + STEP_MAX_VISIBLE_MOVIES);

  useFetchMovies();

  useEffect(() => {
    setMainMovie(getRandomMovie(movies));
  }, [movies]);

  return {
    genres,
    activeGenre,
    moviesByGenreAndMaxVisible,
    moviesLoaded,
    allMoviesIsVisible,
    mainMovie,
    user,
    genreClickHandler,
    btnShowMoreClickHandler,
  };
};
