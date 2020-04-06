import { genreSlice } from './genre-slice';

export { ALL_GENRES, selectGenre } from './genre-slice';
export const { setGenre } = genreSlice.actions;
export const genreReducer = genreSlice.reducer;
