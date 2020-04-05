import { MouseEventHandler } from 'react';

export type GenreClickHandler = (genre: string) => MouseEventHandler<HTMLAnchorElement>;
export { GenresList } from './genres-list';
