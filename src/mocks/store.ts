import { RootState } from 'src/state/root-reducer';
import { moviesAdapter, moviesInitialState } from 'src/state/slices/movies';
import { uiInitialState } from 'src/state/slices/ui';
import { userInitialState } from 'src/state/slices/user';
import { history } from 'src/state/history';

const mockStore: RootState = {
  router: history,
  ui: uiInitialState,
  movies: moviesAdapter.getInitialState(moviesInitialState),
  user: userInitialState,
};

export default mockStore;
