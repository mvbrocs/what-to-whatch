import { mockStore } from 'src/mocks';
import { selectIsAuthorizationRequired, selectVideoPlayerFullscreen } from 'src/state/ui/selectors';
import { uiInitialState } from 'src/state/ui/slice';

describe('UI selectors', () => {
  it('should selectIsAuthorizationRequired', () => {
    expect(selectIsAuthorizationRequired(mockStore)).toEqual(
      uiInitialState.isAuthorizationRequired,
    );
  });

  it('should selectVideoPlayerFullscreen', () => {
    expect(selectVideoPlayerFullscreen(mockStore)).toEqual(uiInitialState.videoPlayerFullscreen);
  });
});
