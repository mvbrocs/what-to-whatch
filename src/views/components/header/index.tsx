import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { Logo } from 'src/views/components';

type HeaderProps = {
  className?: string;
  children?: ReactNode;
};

const Header = ({ className, children }: HeaderProps) => (
  <header className={classNames('page-header', className)}>
    <Logo />

    {children}
  </header>
);

export default Header;
