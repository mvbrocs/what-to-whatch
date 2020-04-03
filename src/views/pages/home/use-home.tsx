import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchMovies, selectAllMovies } from 'state/movies';

export const useHome = () => {
  const movies = useSelector(selectAllMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return { movies };
};
