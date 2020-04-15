import React from 'react';

import { Tab } from './tab';
import { useTabs } from './use-tabs';

type TabsProps = {
  children: JSX.Element[];
};

const Tabs = ({ children }: TabsProps) => {
  const { activeIndex, tabClickHandler } = useTabs(children[0].props.index);
  const tabs = children.map(({ props }) => {
    const { index, tab } = props;

    return (
      <Tab active={activeIndex === index} onClick={tabClickHandler(index)} key={index}>
        {tab}
      </Tab>
    );
  });
  const panes = children.map((element) => {
    const { index } = element.props;

    return (
      <div hidden={index !== activeIndex} key={index}>
        {element}
      </div>
    );
  });

  return (
    <>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">{tabs}</ul>
      </nav>

      {panes}
    </>
  );
};

export default Tabs;
