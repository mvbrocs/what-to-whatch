import { RootState } from 'state/root-reducer';
import { moviesAdapter, moviesInitialState } from 'state/movies/slice';
import { uiInitialState } from 'state/ui/slice';

export const mockStore: RootState = {
  ui: uiInitialState,
  movies: moviesAdapter.getInitialState(moviesInitialState),
};
