import React, { ReactNode } from 'react';

type BtnProps = {
  children: ReactNode;
  onClick: () => void;
};

const Btn = ({ children, onClick }: BtnProps) => {
  return (
    <button className="btn movie-card__button" type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Btn;
