import { setGenre, genreReducer, ALL_GENRES } from './';

describe('Genre slice', () => {
  describe('actions', () => {
    it('should create action set genre ', () => {
      const text = 'Fantastic';
      const expectedAction = {
        type: 'genre/setGenre',
        payload: text,
      };

      expect(setGenre(text)).toEqual(expectedAction);
    });
  });

  describe('reducer', () => {
    it('should return initial state', () => {
      expect(genreReducer(undefined, { type: 'badAction' })).toEqual(ALL_GENRES);
    });

    it('should change genre', () => {
      const newGenre = 'Fantastic';
      const action = {
        type: 'genre/setGenre',
        payload: newGenre,
      };

      expect(genreReducer(undefined, action)).toEqual(newGenre);
    });
  });
});
