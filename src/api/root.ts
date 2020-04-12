import axios from 'axios';

export const root = axios.create({
  baseURL: 'https://htmlacademy-react-2.appspot.com/wtw',
});
