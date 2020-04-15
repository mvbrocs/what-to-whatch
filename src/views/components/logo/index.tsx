import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { Path } from 'src/routes';

type LogoProps = {
  light?: boolean;
};

const Logo = ({ light }: LogoProps) => (
  <div className="logo">
    <Link to={Path.HOME} className={classNames('logo__link', { 'logo__link--light': light })}>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Link>
  </div>
);

export default Logo;
