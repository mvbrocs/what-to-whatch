import { createNextState } from '@reduxjs/toolkit';

import {
  uiInitialState,
  uiReducer,
  toggleAuthorizationRequired,
  setGenre,
  toggleVideoPlayerFullscreenVisible,
  updateVideoPlayerFullscreenData,
  incrementMaxVisibleMovies,
} from 'src/state/ui';

describe('UI slice', () => {
  describe('actions', () => {
    it('should create action toggleAuthorizationRequired', () => {
      const expectedAction = {
        type: 'ui/toggleAuthorizationRequired',
      };

      expect(toggleAuthorizationRequired()).toEqual(expectedAction);
    });

    it('should create action setGenre ', () => {
      const text = 'Fantastic';
      const expectedAction = {
        type: 'ui/setGenre',
        payload: text,
      };

      expect(setGenre(text)).toEqual(expectedAction);
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

    it('should create action incrementMaxVisibleMovies', () => {
      const expectedAction = {
        type: 'ui/incrementMaxVisibleMovies',
        payload: 2,
      };

      expect(incrementMaxVisibleMovies(2)).toEqual(expectedAction);
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

    it('should setGenre', () => {
      const newGenre = 'Fantastic';
      const action = {
        type: 'ui/setGenre',
        payload: newGenre,
      };
      const expectedState = createNextState(uiInitialState, (draft) => {
        draft.genre = newGenre;
      });

      expect(uiReducer(undefined, action)).toEqual(expectedState);
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
        draft.videoPlayerFullscreen.video_link = action.payload.video_link;
        draft.videoPlayerFullscreen.name = action.payload.name;
        draft.videoPlayerFullscreen.background_image = action.payload.background_image;
        draft.videoPlayerFullscreen.background_color = action.payload.background_color;
      });

      expect(uiReducer(uiInitialState, action)).toEqual(expectedState);
    });

    it('should incrementMaxVisibleMovies', () => {
      const action = {
        type: 'ui/incrementMaxVisibleMovies',
        payload: 2,
      };
      const expectedState = createNextState(uiInitialState, (draft) => {
        draft.maxVisibleMovies += action.payload;
      });

      expect(uiReducer(undefined, action)).toEqual(expectedState);
    });
  });
});
