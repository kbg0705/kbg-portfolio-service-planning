import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PortfolioApp from './PortfolioApp';
import './styles/portfolio.css';

const redirectPath = new URLSearchParams(window.location.search).get('redirect');
if (redirectPath) {
  const basePath = window.location.pathname.startsWith('/kbg-portfolio-service-planning')
    ? '/kbg-portfolio-service-planning'
    : '';
  window.history.replaceState(null, '', `${basePath}${redirectPath}`);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PortfolioApp />
  </StrictMode>,
);
