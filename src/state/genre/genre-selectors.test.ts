import { createNextState } from '@reduxjs/toolkit';

import { store } from 'mocks/store';
import { selectGenre } from './';

describe('Genre selectors', () => {
  const genre = 'Genre 2';
  const testStore = createNextState(store, (draft) => {
    draft.genre = genre;
  });

  it('should return correct genre', () => {
    expect(selectGenre(testStore)).toEqual(genre);
  });
});
