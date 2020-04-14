import { RootState } from 'src/state/root-reducer';
import { moviesAdapter, moviesInitialState } from 'src/state/movies';
import { uiInitialState } from 'src/state/ui';
import { userInitialState } from 'src/state/user';
import { history } from 'src/history';

export const mockStore: RootState = {
  router: history,
  ui: uiInitialState,
  movies: moviesAdapter.getInitialState(moviesInitialState),
  user: userInitialState,
};
