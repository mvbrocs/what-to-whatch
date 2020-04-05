import React, { ReactNode, MouseEventHandler } from 'react';
import classNames from 'classnames';

type TabProps = {
  active: boolean;
  children: ReactNode;
  onClick: MouseEventHandler<HTMLAnchorElement>;
};

export const Tab = ({ active, children, onClick }: TabProps) => (
  <li
    className={classNames('movie-nav__item', {
      'movie-nav__item--active': active,
    })}
  >
    <a href="#" className="movie-nav__link" onClick={onClick}>
      {children}
    </a>
  </li>
);
