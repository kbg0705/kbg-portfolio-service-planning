import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/global.css';

const redirectPath = new URLSearchParams(window.location.search).get('redirect');

if (redirectPath) {
  const basePath = window.location.pathname.startsWith('/miricanvas-junior-pm-portfolio')
    ? '/miricanvas-junior-pm-portfolio'
    : '';
  window.history.replaceState(null, '', `${basePath}${redirectPath}`);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
