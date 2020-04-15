import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from 'src/api';

export const fetchMovies = createAsyncThunk('movies/getAll', async () => {
  const { data } = await api.films.getAll();

  return data;
});
