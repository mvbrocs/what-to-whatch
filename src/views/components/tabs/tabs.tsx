import React, { useState, MouseEvent as ReactMouseEvent } from 'react';
import classNames from 'classnames';

type TabsProps = {
  children: JSX.Element[];
};

export const Tabs = ({ children }: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(children[0].props.index);
  const tabLinkClickHandler = (index: string) => (event: ReactMouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setActiveIndex(index);
  };
  const tabs = children.map(({ props }) => (
    <li
      className={classNames('movie-nav__item', {
        'movie-nav__item--active': props.index === activeIndex,
      })}
      key={props.index}
    >
      <a href="#" className="movie-nav__link" onClick={tabLinkClickHandler(props.index)}>
        {props.tab}
      </a>
    </li>
  ));
  const panes = children.map((element) => (
    <div hidden={element.props.index !== activeIndex} key={element.props.index}>
      {element}
    </div>
  ));

  return (
    <>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">{tabs}</ul>
      </nav>

      {panes}
    </>
  );
};
