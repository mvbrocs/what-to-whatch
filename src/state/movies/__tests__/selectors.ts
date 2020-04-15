import { createNextState } from '@reduxjs/toolkit';

import {
  selectMoviesSlice,
  selectAllMovies,
  selectMoviesByGenre,
  selectAllGenres,
  selectMoviesByGenreAndMaxVisible,
  selectAllMoviesIsVisible,
  selectMovieByRandom,
  makeSelectMovieById,
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

  describe('selectMoviesByGenre', () => {
    it('should return all movies', () => {
      expect(selectMoviesByGenre(storeWithMovies)).toEqual([
        movie1,
        movie2,
        movie3,
        movie4,
        movie5,
      ]);
    });

    it('should return correct movies', () => {
      const storeWithMoviesAndGenre = createNextState(storeWithMovies, (draft) => {
        draft.ui.genre = genre1;
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
      expect(selectAllGenres(mockStore)).toEqual([ALL_GENRES]);
    });

    it('with movies', () => {
      expect(selectAllGenres(testedStore)).toEqual([ALL_GENRES, genre1, genre2]);
    });
  });

  describe('selectMoviesByGenreAndMaxVisible', () => {
    it('max -1', () => {
      const testedStoreMaxMinusOne = createNextState(storeWithMovies, (draft) => {
        draft.ui.maxVisibleMovies = -1;
      });

      expect(selectMoviesByGenreAndMaxVisible(testedStoreMaxMinusOne)).toEqual([]);
    });

    it('max -10', () => {
      const testedStoreMaxMinusTen = createNextState(storeWithMovies, (draft) => {
        draft.ui.maxVisibleMovies = -10;
      });

      expect(selectMoviesByGenreAndMaxVisible(testedStoreMaxMinusTen)).toEqual([]);
    });

    it('max 0', () => {
      const testedStoreMaxZero = createNextState(storeWithMovies, (draft) => {
        draft.ui.maxVisibleMovies = 0;
      });

      expect(selectMoviesByGenreAndMaxVisible(testedStoreMaxZero)).toEqual([]);
    });

    it('max 2', () => {
      const testedStoreMaxThree = createNextState(storeWithMovies, (draft) => {
        draft.ui.maxVisibleMovies = 2;
      });

      expect(selectMoviesByGenreAndMaxVisible(testedStoreMaxThree)).toEqual([movie1, movie2]);
    });

    it('max 4', () => {
      const testedStoreMaxFour = createNextState(storeWithMovies, (draft) => {
        draft.ui.maxVisibleMovies = 4;
      });

      expect(selectMoviesByGenreAndMaxVisible(testedStoreMaxFour)).toEqual([
        movie1,
        movie2,
        movie3,
        movie4,
      ]);
    });

    it('max 1000', () => {
      const testedStoreMaxOneThousand = createNextState(storeWithMovies, (draft) => {
        draft.ui.maxVisibleMovies = 1000;
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
        draft.ui.maxVisibleMovies = -1;
      });

      expect(selectAllMoviesIsVisible(testedStore)).toBeFalsy();
    });

    test('maxVisible less movies', () => {
      const testedStore = createNextState(storeWithMovies, (draft) => {
        draft.ui.maxVisibleMovies = draft.movies.ids.length - 1;
      });

      expect(selectAllMoviesIsVisible(testedStore)).toBeFalsy();
    });

    test('maxVisible equal movies', () => {
      const testedStore = createNextState(storeWithMovies, (draft) => {
        draft.ui.maxVisibleMovies = draft.movies.ids.length;
      });

      expect(selectAllMoviesIsVisible(testedStore)).toBeTruthy();
    });

    test('maxVisible greater movies', () => {
      const testedStore = createNextState(storeWithMovies, (draft) => {
        draft.ui.maxVisibleMovies = draft.movies.ids.length + 1000;
      });

      expect(selectAllMoviesIsVisible(testedStore)).toBeTruthy();
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

  describe('selectMovieById', () => {
    const selectMovieById = makeSelectMovieById('1');

    it('should return null, if no movies', () => {
      expect(selectMovieById(mockStore)).toEqual(null);
    });

    it('should return movie, if movies', () => {});
  });
});
