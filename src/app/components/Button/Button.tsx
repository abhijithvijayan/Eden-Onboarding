import * as React from 'react';
import './button.styles.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({onClick, children}) => {
  return (
    <button type={'button'} className="button" onClick={onClick}>
      {children}
    </button>
  );
};
