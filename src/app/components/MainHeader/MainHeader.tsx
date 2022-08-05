import * as React from 'react';
import {Logo} from '../icons/Logo';
import './mainHeader.styles.scss';

export const MainHeader: React.FC = () => (
  <div className="main__header">
    <Logo color="#664de5" size={32} />
    <h1 className="main__header-heading">Eden</h1>
  </div>
);
