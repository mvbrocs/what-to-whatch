import { createNextState } from '@reduxjs/toolkit';

import { moviesReducer } from './';
import { moviesInitialState, moviesAdapter } from './movies-slice';
import { mockFilms } from 'mocks/films';

describe('Movies reducer', () => {
  const initialStateSlice = moviesAdapter.getInitialState(moviesInitialState);
  const pendingState = createNextState(initialStateSlice, (draft) => {
    draft.loading = true;
  });
  const fulfilledState = createNextState(initialStateSlice, (draft) => {
    draft.loaded = true;
    draft.ids = [mockFilms[0].id, mockFilms[1].id];
    draft.entities = {
      [mockFilms[0].id]: mockFilms[0],
      [mockFilms[1].id]: mockFilms[1],
    };
  });
  const rejectedState = createNextState(initialStateSlice, (draft) => {
    draft.error = 'Some error';
  });

  test('bad action', () => {
    expect(moviesReducer(undefined, { type: 'badAction' })).toEqual(initialStateSlice);
  });

  describe('movies/getAll', () => {
    describe('pending', () => {
      const pendingAction = {
        type: 'movies/getAll/pending',
      };

      test('default', () => {
        expect(moviesReducer(undefined, pendingAction)).toEqual(pendingState);
      });

      test('with error', () => {
        expect(moviesReducer(rejectedState, pendingAction)).toEqual(pendingState);
      });

      test('with entities', () => {
        expect(moviesReducer(fulfilledState, pendingAction)).toEqual(pendingState);
      });
    });

    test('fulfilled', () => {
      const fulfilledAction = {
        type: 'movies/getAll/fulfilled',
        payload: [mockFilms[0], mockFilms[1]],
      };

      expect(moviesReducer(pendingState, fulfilledAction)).toEqual(fulfilledState);
    });
  });

  test('movies/incrementMaxVisibleMovies', () => {
    const testedState = createNextState(initialStateSlice, (draft) => {
      draft.maxVisible = 3;
    });
    const incrementValue = 11;
    const action = {
      type: 'movies/incrementMaxVisibleMovies',
      payload: incrementValue,
    };
    const expectedState = createNextState(testedState, (draft) => {
      draft.maxVisible += incrementValue;
    });

    expect(moviesReducer(testedState, action)).toEqual(expectedState);
  });
});
