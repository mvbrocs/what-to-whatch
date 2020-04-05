import { useState, MouseEventHandler } from 'react';

export const useTabs = (defaultIndex: string) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const tabClickHandler = (index: string): MouseEventHandler<HTMLAnchorElement> => (event) => {
    event.preventDefault();
    setActiveIndex(index);
  };

  return { activeIndex, tabClickHandler };
};
