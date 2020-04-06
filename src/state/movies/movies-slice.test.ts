import { createNextState } from '@reduxjs/toolkit';

import { moviesReducer } from './';
import { initialState, moviesAdapter } from './movies-slice';
import { mockMovies } from 'mocks/mock-movies';

describe('Movies slice', () => {
  const initialStateSlice = moviesAdapter.getInitialState(initialState);
  const pendingState = createNextState(initialStateSlice, (draft) => {
    draft.loading = true;
  });
  const fulfilledState = createNextState(initialStateSlice, (draft) => {
    draft.loaded = true;
    draft.ids = [mockMovies[0].id, mockMovies[1].id];
    draft.entities = {
      [mockMovies[0].id]: mockMovies[0],
      [mockMovies[1].id]: mockMovies[1],
    };
  });
  const rejectedState = createNextState(initialStateSlice, (draft) => {
    draft.error = 'Some error';
  });

  describe('actions', () => {});

  describe('reducer', () => {
    it('should return initial state', () => {
      expect(moviesReducer(undefined, { type: 'badAction' })).toEqual(initialStateSlice);
    });

    describe('movies/getAll/pending', () => {
      const pendingAction = {
        type: 'movies/getAll/pending',
      };

      it('should return correct state', () => {
        expect(moviesReducer(undefined, pendingAction)).toEqual(pendingState);
      });

      it('should return correct state, with error', () => {
        expect(moviesReducer(rejectedState, pendingAction)).toEqual(pendingState);
      });

      it('should return correct state, with entities', () => {
        expect(moviesReducer(fulfilledState, pendingAction)).toEqual(pendingState);
      });
    });

    describe('movies/getAll/fulfilled', () => {
      const fulfilledAction = {
        type: 'movies/getAll/fulfilled',
        payload: [mockMovies[0], mockMovies[1]],
      };

      it('should return correct state', () => {
        expect(moviesReducer(pendingState, fulfilledAction)).toEqual(fulfilledState);
      });
    });
  });
});
