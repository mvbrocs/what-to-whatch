import { root } from './root';

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

export const login = (data: Credentials) => root.post<User>('/login', data);
