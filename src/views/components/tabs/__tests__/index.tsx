import React from 'react';
import { mount } from 'enzyme';

import { Tabs, TabPane } from 'src/views/components';

describe('Tabs', () => {
  const tabs = mount(
    <Tabs>
      <TabPane tab="Tab 1" index="1">
        Tab content 1
      </TabPane>
      <TabPane tab="Tab 2" index="2">
        Tab content 2
      </TabPane>
    </Tabs>,
  );

  it('renders properly', () => {
    expect(tabs).toMatchSnapshot();
  });

  it('should correctly toggle tabs', () => {
    tabs
      .find('.movie-nav__link')
      .at(1)
      .simulate('click', { preventDefault: () => {} });

    expect(
      tabs
        .find('.movie-nav__item')
        .at(0)
        .hasClass('movie-nav__item--active'),
    ).toBeFalsy();
    expect(
      tabs
        .find('.movie-nav__item')
        .at(1)
        .hasClass('movie-nav__item--active'),
    ).toBeTruthy();
    expect(
      tabs
        .find('[index="1"]')
        .parent()
        .prop('hidden'),
    ).toBeTruthy();
    expect(
      tabs
        .find('[index="2"]')
        .parent()
        .prop('hidden'),
    ).toBeFalsy();
  });
});
