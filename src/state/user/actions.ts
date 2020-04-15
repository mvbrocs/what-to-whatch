import { createAsyncThunk } from '@reduxjs/toolkit';
import { goBack } from 'connected-react-router';

import { Credentials } from 'src/api/login';
import { api } from 'src/api';

export const login = createAsyncThunk(
  'user/login',
  async (credentials: Credentials, { dispatch }) => {
    const { data } = await api.login(credentials);

    dispatch(goBack());

    return data;
  },
);
