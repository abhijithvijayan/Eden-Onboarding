import * as React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './app';
import {OnboardingProvider} from './app/state/OnboardingProvider';
import './styles/main.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <OnboardingProvider>
      <App />
    </OnboardingProvider>
  </React.StrictMode>
);
