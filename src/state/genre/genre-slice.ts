import { createSlice, PayloadAction, CaseReducer } from '@reduxjs/toolkit';

const setGenre: CaseReducer<string, PayloadAction<string>> = (state, action) => action.payload;

const ALL_GENRES = 'All genres';

export const genreSlice = {
  ALL_GENRES,
  slice: createSlice({
    name: 'genre',
    initialState: ALL_GENRES,
    reducers: {
      setGenre,
    },
  }),
};
