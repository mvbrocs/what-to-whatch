import React, { ReactNode } from 'react';

type TabPaneProps = {
  tab: ReactNode;
  index: string;
  children: ReactNode;
};

export const TabPane = ({ children }: TabPaneProps) => <>{children}</>;
