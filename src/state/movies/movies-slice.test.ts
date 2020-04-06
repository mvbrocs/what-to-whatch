import { createNextState } from '@reduxjs/toolkit';

import { moviesReducer } from './';
import { initialState, moviesAdapter } from './movies-slice';
import { movies } from 'mocks/movies';

describe('Movies slice', () => {
  const initialStateSlice = moviesAdapter.getInitialState(initialState);
  const pendingState = createNextState(initialStateSlice, (draft) => {
    draft.loading = true;
  });
  const fulfilledState = createNextState(initialStateSlice, (draft) => {
    draft.loaded = true;
    draft.ids = [movies[0].id, movies[1].id];
    draft.entities = {
      [movies[0].id]: movies[0],
      [movies[1].id]: movies[1],
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
        payload: [movies[0], movies[1]],
      };

      it('should return correct state', () => {
        expect(moviesReducer(pendingState, fulfilledAction)).toEqual(fulfilledState);
      });
    });
  });
});
