import { createNextState } from '@reduxjs/toolkit';

import {
  selectMoviesSlice,
  selectAllMovies,
  selectAllGenres,
  selectMovieByRandom,
} from 'src/state/movies/selectors';
import { ALL_GENRES } from 'src/state/ui/slice';
import { mockStore, mockFilms } from 'src/mocks';

describe('Movies selectors', () => {
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

  describe('selectAllMovies', () => {
    it('no movies', () => {
      expect(selectAllMovies(mockStore)).toEqual([]);
    });

    it('movies', () => {
      expect(selectAllMovies(storeWithMovies)).toEqual([movie1, movie2, movie3, movie4, movie5]);
    });
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

  describe('selectMovieByRandom', () => {
    test('no movies', () => {
      expect(selectMovieByRandom(mockStore)).toEqual(null);
    });

    test('movies loaded', () => {
      expect(typeof selectMovieByRandom(storeWithMovies)?.name).toEqual('string');
    });
  });
});
