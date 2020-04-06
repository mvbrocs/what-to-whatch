import { RootState } from 'state/root-reducer';

export const mockStore: RootState = {
  genre: 'Some genre',
  movies: {
    loaded: false,
    loading: false,
    error: null,
    maxVisible: 0,
    ids: [],
    entities: {},
  },
};
