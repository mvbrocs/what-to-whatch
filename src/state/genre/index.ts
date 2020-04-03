import { genreSlice } from './genre-slice';
import { RootState } from 'state/root-reducer';

export const { ALL_GENRES } = genreSlice;
export const { setGenre } = genreSlice.slice.actions;
export const genreReducer = genreSlice.slice.reducer;
export const selectGenre = (state: RootState) => state.genre;
