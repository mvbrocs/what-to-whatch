import axios from 'axios';

import { filmsAPI } from './films';
import { loginAPI } from './login';

const BASE_URL = 'https://htmlacademy-react-2.appspot.com/wtw';

export const appAxios = axios.create({
  baseURL: BASE_URL,
});

export const api = {
  BASE_URL,
  films: filmsAPI,
  login: loginAPI,
};
