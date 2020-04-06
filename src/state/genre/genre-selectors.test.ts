import { createNextState } from '@reduxjs/toolkit';

import { mockStore } from 'mocks/mock-store';
import { selectGenre } from './';

describe('Genre selectors', () => {
  const genre = 'Genre 2';
  const testStore = createNextState(mockStore, (draft) => {
    draft.genre = genre;
  });

  it('should return correct genre', () => {
    expect(selectGenre(testStore)).toEqual(genre);
  });
});
