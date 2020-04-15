import React, { ReactNode } from 'react';

type TabPaneProps = {
  tab: ReactNode;
  index: string;
  children: ReactNode;
};

const TabPane = ({ children }: TabPaneProps) => <>{children}</>;

export default TabPane;
