import { createNextState } from '@reduxjs/toolkit';

import {
  selectMoviesSlice,
  selectAllMovies,
  selectMoviesByGenre,
  selectAllGenres,
  selectMaxVisibleMovies,
  selectMoviesByGenreAndMaxVisible,
  selectAllMoviesIsVisible,
} from './movies-selectors';
import { ALL_GENRES } from 'state/genre';
import { mockStore } from 'mocks/mock-store';
import { mockMovies } from 'mocks/mock-movies';

describe('Movies selectors', () => {
  const moviesInitialState = {
    loaded: false,
    loading: false,
    error: null,
    ids: [],
    entities: {},
    maxVisible: 8,
  };
  const genre1 = 'Genre 1';
  const genre2 = 'Genre 2';
  const movie1 = createNextState(mockMovies[0], (draft) => {
    draft.genre = genre1;
  });
  const movie2 = createNextState(mockMovies[1], (draft) => {
    draft.genre = genre2;
  });
  const movie3 = createNextState(mockMovies[2], (draft) => {
    draft.genre = genre1;
  });
  const movie4 = createNextState(mockMovies[3], (draft) => {
    draft.genre = genre2;
  });
  const movie5 = createNextState(mockMovies[4], (draft) => {
    draft.genre = genre2;
  });
  const initialStore = createNextState(mockStore, (draft) => {
    draft.movies = moviesInitialState;
  });
  const storeWithMovies = createNextState(initialStore, (draft) => {
    draft.genre = ALL_GENRES;
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
    expect(selectMoviesSlice(initialStore)).toEqual(moviesInitialState);
  });

  describe('selectAllMovies', () => {
    it('no movies', () => {
      expect(selectAllMovies(initialStore)).toEqual([]);
    });

    it('movies', () => {
      expect(selectAllMovies(storeWithMovies)).toEqual([movie1, movie2, movie3, movie4, movie5]);
    });
  });

  describe('selectMoviesByGenre', () => {
    it('should return all movies', () => {
      const storeWithMoviesAndAllGenre = createNextState(storeWithMovies, (draft) => {
        draft.genre = ALL_GENRES;
      });

      expect(selectMoviesByGenre(storeWithMoviesAndAllGenre)).toEqual([
        movie1,
        movie2,
        movie3,
        movie4,
        movie5,
      ]);
    });

    it('should return correct movies', () => {
      const storeWithMoviesAndGenre = createNextState(storeWithMovies, (draft) => {
        draft.genre = genre1;
      });

      expect(selectMoviesByGenre(storeWithMoviesAndGenre)).toEqual([movie1, movie3]);
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
      expect(selectAllGenres(initialStore)).toEqual([ALL_GENRES]);
    });

    it('with movies', () => {
      expect(selectAllGenres(testedStore)).toEqual([ALL_GENRES, genre1, genre2]);
    });
  });

  it('selectMaxVisibleMovies', () => {
    const max = 10;
    const testedStore = createNextState(initialStore, (draft) => {
      draft.movies.maxVisible = max;
    });

    expect(selectMaxVisibleMovies(testedStore)).toEqual(max);
  });

  describe('selectMoviesByGenreAndMaxVisible', () => {
    const testedStoreAllGenres = createNextState(storeWithMovies, (draft) => {
      draft.genre = ALL_GENRES;
    });

    it('max -1', () => {
      const testedStoreMaxMinusOne = createNextState(testedStoreAllGenres, (draft) => {
        draft.movies.maxVisible = -1;
      });

      expect(selectMoviesByGenreAndMaxVisible(testedStoreMaxMinusOne)).toEqual([]);
    });

    it('max -10', () => {
      const testedStoreMaxMinusTen = createNextState(testedStoreAllGenres, (draft) => {
        draft.movies.maxVisible = -10;
      });

      expect(selectMoviesByGenreAndMaxVisible(testedStoreMaxMinusTen)).toEqual([]);
    });

    it('max 0', () => {
      const testedStoreMaxZero = createNextState(testedStoreAllGenres, (draft) => {
        draft.movies.maxVisible = 0;
      });

      expect(selectMoviesByGenreAndMaxVisible(testedStoreMaxZero)).toEqual([]);
    });

    it('max 2', () => {
      const testedStoreMaxThree = createNextState(testedStoreAllGenres, (draft) => {
        draft.movies.maxVisible = 2;
      });

      expect(selectMoviesByGenreAndMaxVisible(testedStoreMaxThree)).toEqual([movie1, movie2]);
    });

    it('max 4', () => {
      const testedStoreMaxFour = createNextState(testedStoreAllGenres, (draft) => {
        draft.movies.maxVisible = 4;
      });

      expect(selectMoviesByGenreAndMaxVisible(testedStoreMaxFour)).toEqual([
        movie1,
        movie2,
        movie3,
        movie4,
      ]);
    });

    it('max 1000', () => {
      const testedStoreMaxOneThousand = createNextState(testedStoreAllGenres, (draft) => {
        draft.movies.maxVisible = 1000;
      });

      expect(selectMoviesByGenreAndMaxVisible(testedStoreMaxOneThousand)).toEqual([
        movie1,
        movie2,
        movie3,
        movie4,
        movie5,
      ]);
    });
  });

  describe('selectAllMoviesIsVisible', () => {
    test('maxVisible negative', () => {
      const testedStore = createNextState(storeWithMovies, (draft) => {
        draft.movies.maxVisible = -1;
      });

      expect(selectAllMoviesIsVisible(testedStore)).toBeFalsy();
    });

    test('maxVisible less movies', () => {
      const testedStore = createNextState(storeWithMovies, (draft) => {
        draft.movies.maxVisible = draft.movies.ids.length - 1;
      });

      expect(selectAllMoviesIsVisible(testedStore)).toBeFalsy();
    });

    test('maxVisible equal movies', () => {
      const testedStore = createNextState(storeWithMovies, (draft) => {
        draft.movies.maxVisible = draft.movies.ids.length;
      });

      expect(selectAllMoviesIsVisible(testedStore)).toBeTruthy();
    });

    test('maxVisible greater movies', () => {
      const testedStore = createNextState(storeWithMovies, (draft) => {
        draft.movies.maxVisible = draft.movies.ids.length + 1000;
      });

      expect(selectAllMoviesIsVisible(testedStore)).toBeTruthy();
    });
  });
});
