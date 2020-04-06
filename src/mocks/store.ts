import { RootState } from 'state/root-reducer';

export const store: RootState = {
  genre: 'Some genre',
  movies: {
    loaded: false,
    loading: false,
    error: null,
    maxVisibleMovies: 0,
    ids: [],
    entities: {},
  },
};
