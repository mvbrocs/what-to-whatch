import React, { MouseEventHandler } from 'react';
import classNames from 'classnames';

type GenresItemProps = {
  active: boolean;
  text: string;
  onClick: MouseEventHandler<HTMLAnchorElement>;
};

export const GenresItem = ({ active, text, onClick }: GenresItemProps) => (
  <li
    className={classNames('catalog__genres-item', {
      'catalog__genres-item--active': active,
    })}
  >
    <a href="/" className="catalog__genres-link" onClick={onClick}>
      {text}
    </a>
  </li>
);
