import React from 'react';
import { shallow } from 'enzyme';

import { Logo } from 'src/views/components';

describe('Logo', () => {
  it('should render default logo, if no light props', () => {
    const logo = shallow(<Logo />);

    expect(logo.find('.logo__link').prop('className')).toEqual('logo__link');
  });

  it('should render light logo if light props', () => {
    const logo = shallow(<Logo light />);

    expect(logo.find('.logo__link').hasClass('logo__link--light')).toBeTruthy();
  });
});
