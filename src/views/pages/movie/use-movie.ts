import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setGenre } from 'src/state/ui/actions';
import { fetchMovies } from 'src/state/movies/actions';
import {
  makeSelectMovieById,
  selectMoviesByGenre,
  selectMoviesSlice,
} from 'src/state/movies/selectors';

export const useMovie = () => {
  const { id } = useParams();
  const movie = useSelector(makeSelectMovieById(id));
  const moviesSlice = useSelector(selectMoviesSlice);
  const movies = useSelector(selectMoviesByGenre).filter((movieEl) => movieEl.id !== movie?.id);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!moviesSlice.loaded) dispatch(fetchMovies());
    if (movie) dispatch(setGenre(movie.genre));
  }, [moviesSlice.loaded, movie, dispatch]);

  return { movie, movies };
};
