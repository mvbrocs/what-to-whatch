import { createNextState } from '@reduxjs/toolkit';

import { uiInitialState, uiReducer } from 'src/state/ui/slice';
import {
  toggleAuthorizationRequired,
  toggleVideoPlayerFullscreenVisible,
  updateVideoPlayerFullscreenData,
} from 'src/state/ui/actions';

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
});
