import React from 'react';
import { Link } from 'react-router-dom';

import { Path } from 'src/routes';
import { api } from 'src/api';

type UserBlockProps = {
  avatarURL?: string;
};

const UserBlock = ({ avatarURL }: UserBlockProps) => (
  <div className="user-block">
    {avatarURL ? (
      <Link to={Path.MY_LIST}>
        <div className="user-block__avatar">
          <img
            src={api.BASE_URL.replace(/wtw/, avatarURL)}
            alt="IUser avatar"
            width="63"
            height="63"
          />
        </div>
      </Link>
    ) : (
      <Link to={Path.SIGN_IN} className="user-block__link">
        Sign in
      </Link>
    )}
  </div>
);

export default UserBlock;
