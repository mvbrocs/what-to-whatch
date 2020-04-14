import React, { ReactNode } from 'react';
import classNames from 'classnames';

type HeaderProps = {
  className?: string;
  children?: ReactNode;
};

export const Header = ({ className, children }: HeaderProps) => (
  <header className={classNames('page-header', className)}>
    <div className="logo">
      <a href="/" className="logo__link">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>

    {children}
  </header>
);
