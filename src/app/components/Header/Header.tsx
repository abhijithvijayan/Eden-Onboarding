import * as React from 'react';
import './header.styles.scss';

interface HeaderProps {
  title: string;
  sub: string;
}

export const Header: React.FC<HeaderProps> = ({title, sub}) => {
  return (
    <div className="header">
      <h3 className="header__title">{title}</h3>
      <p className="header__sub">{sub}</p>
    </div>
  );
};
