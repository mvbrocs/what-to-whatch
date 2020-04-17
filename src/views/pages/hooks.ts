import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchMovies } from 'src/state/movies/actions';
import { selectMoviesSlice } from 'src/state/movies/selectors';

export const useFetchMovies = () => {
  const { loaded: moviesLoaded, loading: moviesLoading } = useSelector(selectMoviesSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!moviesLoaded && !moviesLoading) dispatch(fetchMovies());
  }, [dispatch, moviesLoaded, moviesLoading]);
};
