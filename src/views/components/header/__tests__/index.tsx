import React from 'react';
import { shallow } from 'enzyme';

import { Header } from 'src/views/components';

describe('Header', () => {
  it('should render header without children', () => {
    const header = shallow(<Header />);

    expect(header.children().length).toEqual(1);
  });

  it('should render header with children', () => {
    const header = shallow(
      <Header>
        <div>one</div>
        <div>two</div>
      </Header>,
    );

    expect(header.children().length).toEqual(3);
  });

  it('should render header without additional classNames', () => {
    const header = shallow(<Header />);

    expect(header.prop('className')).toEqual('page-header');
  });

  it('should render header with additional classNames', () => {
    const header = shallow(<Header className="one two" />);

    expect(header.prop('className')).toEqual('page-header one two');
  });
});
