import { createNextState } from '@reduxjs/toolkit';

import { mockStore } from 'src/mocks';
import {
  uiInitialState,
  uiReducer,
  toggleAuthorizationRequired,
  toggleVideoPlayerFullscreenVisible,
  updateVideoPlayerFullscreenData,
  selectIsAuthorizationRequired,
  selectVideoPlayerFullscreen,
} from 'src/state/slices/ui';

describe('UI slice', () => {
  describe('actions', () => {
    it('should create action toggleAuthorizationRequired', () => {
      const expectedAction = {
        type: 'ui/toggleAuthorizationRequired',
      };

      expect(toggleAuthorizationRequired()).toEqual(expectedAction);
    });

    it('should create action toggleVideoPlayerFullscreenVisible', () => {
      const expectedAction = {
        type: 'ui/toggleVideoPlayerFullscreenVisible',
      };

      expect(toggleVideoPlayerFullscreenVisible()).toEqual(expectedAction);
    });

    it('should create action updateVideoPlayerFullscreenData', () => {
      const payload = {
        background_image: 'image',
        background_color: 'color',
        name: 'name',
        video_link: 'link',
      };
      const expectedAction = {
        type: 'ui/updateVideoPlayerFullscreenData',
        payload,
      };

      expect(updateVideoPlayerFullscreenData(payload)).toEqual(expectedAction);
    });
  });

  describe('reducer', () => {
    it('should toggleAuthorizationRequired', () => {
      const action = {
        type: 'ui/toggleAuthorizationRequired',
      };
      const expectedState = createNextState(uiInitialState, (draft) => {
        draft.isAuthorizationRequired = !draft.isAuthorizationRequired;
      });

      expect(uiReducer(undefined, action)).toEqual(expectedState);
    });

    it('should return initial state', () => {
      expect(uiReducer(undefined, { type: 'badAction' })).toEqual(uiInitialState);
    });

    it('should toggleVideoPlayerFullscreenVisible', () => {
      const action = {
        type: 'ui/toggleVideoPlayerFullscreenVisible',
      };
      const expectedState = createNextState(uiInitialState, (draft) => {
        draft.videoPlayerFullscreen.visible = !draft.videoPlayerFullscreen.visible;
      });

      expect(uiReducer(uiInitialState, action)).toEqual(expectedState);
    });

    it('should updateVideoPlayerFullscreenData', () => {
      const action = {
        type: 'ui/updateVideoPlayerFullscreenData',
        payload: {
          background_image: 'image',
          background_color: 'color',
          name: 'name',
          video_link: 'link',
        },
      };
      const expectedState = createNextState(uiInitialState, (draft) => {
        draft.videoPlayerFullscreen.data = action.payload;
      });

      expect(uiReducer(uiInitialState, action)).toEqual(expectedState);
    });
  });

  describe('selectors', () => {
    it('should selectIsAuthorizationRequired', () => {
      expect(selectIsAuthorizationRequired(mockStore)).toEqual(
        uiInitialState.isAuthorizationRequired,
      );
    });

    it('should selectVideoPlayerFullscreen', () => {
      expect(selectVideoPlayerFullscreen(mockStore)).toEqual(
        uiInitialState.videoPlayerFullscreen,
      );
    });
  });
});
