import { createAsyncThunk } from '@reduxjs/toolkit';

import { moviesAPI } from 'mocks/api/movies';

export const moviesThunks = {
  fetchMovies: createAsyncThunk('movies/getAll', async () => {
    const { data } = await moviesAPI.getAll();
    return data;
  }),
};
