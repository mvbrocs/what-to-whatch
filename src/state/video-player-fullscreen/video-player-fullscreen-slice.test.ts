import { createNextState } from '@reduxjs/toolkit';

import { videoPlayerFullscreenReducer, videoPlayerFullscreenInitialState } from './';
import { mockFilms } from 'mocks/films';

describe('videoPlayerFullscreen reducer', () => {
  test('bad action', () => {
    expect(
      videoPlayerFullscreenReducer(videoPlayerFullscreenInitialState, { type: 'someAction' }),
    ).toEqual(videoPlayerFullscreenInitialState);
  });

  test('toggleVideoPlayerFullscreenVisible action', () => {
    const action = {
      type: 'videoPlayerFullscreen/toggleVideoPlayerFullscreenVisible',
    };
    const expectedState = createNextState(videoPlayerFullscreenInitialState, (draft) => {
      draft.visible = !draft.visible;
    });

    expect(videoPlayerFullscreenReducer(videoPlayerFullscreenInitialState, action)).toEqual(
      expectedState,
    );
  });

  test('updateVideoPlayerFullscreenData', () => {
    const payload = {
      background_color: mockFilms[0].background_color,
      background_image: mockFilms[0].background_image,
      name: mockFilms[0].name,
      video_link: mockFilms[0].video_link,
    };
    const action = {
      type: 'videoPlayerFullscreen/updateVideoPlayerFullscreenData',
      payload,
    };
    const expectedState = createNextState(videoPlayerFullscreenInitialState, (draft) => {
      draft.background_color = payload.background_color;
      draft.background_image = payload.background_image;
      draft.name = payload.name;
      draft.video_link = payload.video_link;
    });

    expect(videoPlayerFullscreenReducer(videoPlayerFullscreenInitialState, action)).toEqual(
      expectedState,
    );
  });
});
