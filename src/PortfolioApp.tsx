import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PortfolioHomePage } from './pages/PortfolioHomePage';
import { ProjectCasePage } from './pages/ProjectCasePage';
import { WorkPage } from './pages/WorkPage';

function getBasename() {
  return window.location.pathname.startsWith('/miricanvas-junior-pm-portfolio')
    ? '/miricanvas-junior-pm-portfolio'
    : '/';
}

export default function PortfolioApp() {
  return (
    <BrowserRouter basename={getBasename()}>
      <Routes>
        <Route path="/" element={<PortfolioHomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects/:slug" element={<ProjectCasePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
