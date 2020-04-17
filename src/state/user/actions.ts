import { createAsyncThunk } from '@reduxjs/toolkit';

import { Credentials } from 'src/api/login';
import { api } from 'src/api';

export const login = createAsyncThunk('user/login', async (credentials: Credentials) => {
  const { data } = await api.login(credentials);

  return data;
});
