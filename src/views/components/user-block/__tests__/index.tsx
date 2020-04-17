import React from 'react';
import { shallow } from 'enzyme';

import { UserBlock } from 'src/views/components';
import { IUser } from 'src/api/login';

describe('UserBlock', () => {
  it('should render SignIn if no user', () => {
    const userBlock = shallow(<UserBlock user={null} />);

    expect(userBlock.find('Link').text()).toEqual('Sign in');
    expect(userBlock.find('.user-block__avatar')).toHaveLength(0);
  });

  it('should render avatar, if user', () => {
    const user = {
      avatar_url: 'user avatar',
      email: 'user email',
      id: 1,
      name: 'name',
    } as IUser;
    const userBlock = shallow(<UserBlock user={user} />);

    expect(userBlock.find('.user-block__avatar')).toHaveLength(1);
    expect(userBlock.find('Link')).toHaveLength(0);
  });
});
