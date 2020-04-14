import { mockStore } from 'src/mocks/store';
import {
  uiInitialState,
  selectIsAuthorizationRequired,
  selectGenre,
  selectVideoPlayerFullscreen,
  selectMaxVisibleMovies,
} from 'src/state/ui';

describe('UI selectors', () => {
  it('should selectIsAuthorizationRequired', () => {
    expect(selectIsAuthorizationRequired(mockStore)).toEqual(
      uiInitialState.isAuthorizationRequired,
    );
  });

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
