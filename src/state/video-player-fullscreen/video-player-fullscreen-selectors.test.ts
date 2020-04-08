import { mockStore } from 'mocks/store';
import { selectVideoPlayerFullscreenState } from './video-player-fullscreen-selectors';
import { videoPlayerFullscreenInitialState } from './video-player-fullscreen-slice';

describe('videoPlayerFullscreen', () => {
  test('select slice', () => {
    expect(selectVideoPlayerFullscreenState(mockStore)).toEqual(videoPlayerFullscreenInitialState);
  });
});
