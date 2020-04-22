import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchMoviesIfNeeded } from 'src/state/slices/movies';

export const useFetchMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesIfNeeded());
  }, [dispatch]);
};
