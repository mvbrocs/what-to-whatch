import React from 'react';
import { Link } from 'react-router-dom';

import { Path } from 'src/routes';
import { useUserBlock } from './use-user-block';
import { api } from 'src/api';

export const UserBlock = () => {
  const { user } = useUserBlock();

  return (
    <div className="user-block">
      {user ? (
        <div className="user-block__avatar">
          <img
            src={api.BASE_URL.replace(/wtw/, user.avatar_url)}
            alt="User avatar"
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
