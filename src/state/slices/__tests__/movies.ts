import { createNextState } from '@reduxjs/toolkit';

import { mockFilms, mockStore } from 'src/mocks';
import {
  moviesInitialState,
  moviesAdapter,
  moviesReducer,
  selectMoviesSlice,
  selectAllGenres,
} from 'src/state/slices/movies';
import { ALL_GENRES } from 'src/state/slices/ui';

describe('Movies slice', () => {
  describe('reducer', () => {
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
  });

  describe('selectors', () => {
    const genre1 = 'Genre 1';
    const genre2 = 'Genre 2';
    const movie1 = createNextState(mockFilms[0], (draft) => {
      draft.genre = genre1;
    });
    const movie2 = createNextState(mockFilms[1], (draft) => {
      draft.genre = genre2;
    });
    const movie3 = createNextState(mockFilms[2], (draft) => {
      draft.genre = genre1;
    });
    const movie4 = createNextState(mockFilms[3], (draft) => {
      draft.genre = genre2;
    });
    const movie5 = createNextState(mockFilms[4], (draft) => {
      draft.genre = genre2;
    });
    const storeWithMovies = createNextState(mockStore, (draft) => {
      draft.movies.loaded = true;
      draft.movies.ids = [movie1.id, movie2.id, movie3.id, movie4.id, movie5.id];
      draft.movies.entities = {
        [movie1.id]: movie1,
        [movie2.id]: movie2,
        [movie3.id]: movie3,
        [movie4.id]: movie4,
        [movie5.id]: movie5,
      };
    });

    it('selectMoviesSlice', () => {
      expect(selectMoviesSlice(mockStore)).toEqual(mockStore.movies);
    });

    describe('selectAllGenres', () => {
      const testedStore = createNextState(storeWithMovies, (draft) => {
        draft.movies.entities = {
          [movie1.id]: movie1,
          [movie2.id]: movie2,
          [movie3.id]: movie3,
        };
        draft.movies.ids = [movie1.id, movie2.id, movie3.id];
      });

      it('no movies', () => {
        expect(selectAllGenres(mockStore)).toEqual([ALL_GENRES]);
      });

      it('with movies', () => {
        expect(selectAllGenres(testedStore)).toEqual([ALL_GENRES, genre1, genre2]);
      });
    });
  });
});
