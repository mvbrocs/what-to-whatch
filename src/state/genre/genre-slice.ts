import { createSlice, PayloadAction, CaseReducer } from '@reduxjs/toolkit';
import { RootState } from '../root-reducer';

const setGenre: CaseReducer<string, PayloadAction<string>> = (state, action) => action.payload;

export const ALL_GENRES = 'All genres';

export const genreSlice = createSlice({
  name: 'genre',
  initialState: ALL_GENRES,
  reducers: {
    setGenre,
  },
});

export const selectGenre = (state: RootState) => state.genre;
