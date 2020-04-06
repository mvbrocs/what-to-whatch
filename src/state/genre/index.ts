import { genreSlice } from './genre-slice';

export { ALL_GENRES } from './genre-slice';
export { selectGenre } from './genre-selectors';
export const { setGenre } = genreSlice.actions;
export const genreReducer = genreSlice.reducer;
