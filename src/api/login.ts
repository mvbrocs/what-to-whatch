import { appAxios } from './';

export type Credentials = {
  email: string;
  password: string;
};

export type User = {
  id: number;
  email: string;
  name: string;
  avatar_url: string;
};

export const loginAPI = (data: Credentials) => appAxios.post<User>('/login', data);
