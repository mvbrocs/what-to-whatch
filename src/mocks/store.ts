import { RootState } from 'src/state/root-reducer';
import { moviesAdapter, moviesInitialState } from 'src/state/movies/slice';
import { uiInitialState } from 'src/state/ui/slice';
import { userInitialState } from 'src/state/user/slice';
import { history } from 'src/state/history';

const mockStore: RootState = {
  router: history,
  ui: uiInitialState,
  movies: moviesAdapter.getInitialState(moviesInitialState),
  user: userInitialState,
};

export default mockStore;
