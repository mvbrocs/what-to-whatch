import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchMovies, selectAllGenres, selectMoviesByGenre, selectMoviesSlice } from 'state/movies';
import { selectGenre, setGenre } from 'state/genre';
import { GenreClickHandler } from 'views/components/genres-list';

export const useHome = () => {
  const genres = useSelector(selectAllGenres);
  const activeGenre = useSelector(selectGenre);
  const movies = useSelector(selectMoviesByGenre);
  const { loaded: moviesLoaded } = useSelector(selectMoviesSlice);
  const dispatch = useDispatch();
  const genreClickHandler: GenreClickHandler = (genre) => (event) => {
    event.preventDefault();
    dispatch(setGenre(genre));
  };

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return { genres, activeGenre, genreClickHandler, movies, moviesLoaded };
};
