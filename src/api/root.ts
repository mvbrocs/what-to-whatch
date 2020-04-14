import axios from 'axios';

export const BASE_URL = 'https://htmlacademy-react-2.appspot.com/wtw';

export const root = axios.create({
  baseURL: BASE_URL,
});
