import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchMovies, selectMoviesSlice } from 'src/state/slices/movies';

export const useFetchMovies = () => {
  const { loaded: moviesLoaded, loading: moviesLoading } = useSelector(selectMoviesSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!moviesLoaded && !moviesLoading) dispatch(fetchMovies());
  }, [dispatch, moviesLoaded, moviesLoading]);
};
