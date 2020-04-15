import { appAxios } from './';

export interface IFilm {
  name: string;
  poster_image: string;
  preview_image: string;
  background_image: string;
  background_color: string;
  description: string;
  rating: number;
  scores_count: number;
  director: string;
  starring: string[];
  run_time: number;
  genre: string;
  released: number;
  id: number;
  is_favorite: boolean;
  video_link: string;
  preview_video_link: string;
}

export const filmsAPI = {
  getAll: () => appAxios.get<IFilm[]>('/films'),
};
