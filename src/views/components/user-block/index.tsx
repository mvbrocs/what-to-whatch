import React from 'react';
import { Link } from 'react-router-dom';

import { Path } from 'src/routes';
import { api } from 'src/api';
import { IUser } from 'src/api/login';

type UserBlockProps = {
  user: IUser | null;
};

const UserBlock = ({ user }: UserBlockProps) => {
  return (
    <div className="user-block">
      {user ? (
        <div className="user-block__avatar">
          <img
            src={api.BASE_URL.replace(/wtw/, user.avatar_url)}
            alt="IUser avatar"
            width="63"
            height="63"
          />
        </div>
      ) : (
        <Link to={Path.SIGN_IN} className="user-block__link">
          Sign in
        </Link>
      )}
    </div>
  );
};

export default UserBlock;
