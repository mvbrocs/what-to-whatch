import { appAxios } from './';

export type Credentials = {
  email: string;
  password: string;
};

export type IUser = {
  id: number;
  email: string;
  name: string;
  avatar_url: string;
};

export const loginAPI = (credentials: Credentials) => appAxios.post<IUser>('/login', credentials);
