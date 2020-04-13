import { mockStore } from 'mocks/store';
import { selectGenre, selectVideoPlayerFullscreen, selectMaxVisibleMovies } from '../selectors';
import { uiInitialState } from '../slice';

describe('UI selectors', () => {
  it('should selectGenre', () => {
    expect(selectGenre(mockStore)).toEqual(uiInitialState.genre);
  });

  it('should selectVideoPlayerFullscreen', () => {
    expect(selectVideoPlayerFullscreen(mockStore)).toEqual(uiInitialState.videoPlayerFullscreen);
  });

  it('should selectMaxVisibleMovies', () => {
    expect(selectMaxVisibleMovies(mockStore)).toEqual(uiInitialState.maxVisibleMovies);
  });
});
