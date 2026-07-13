import { useEffect, useLayoutEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PortfolioHomePage } from './pages/PortfolioHomePage';
import { ProjectCasePage } from './pages/ProjectCasePage';
import { WorkPage } from './pages/WorkPage';

function getBasename() {
  return window.location.pathname.startsWith('/kbg-portfolio-service-planning')
    ? '/kbg-portfolio-service-planning'
    : '/';
}

export default function PortfolioApp() {
  return (
    <BrowserRouter basename={getBasename()}>
      <HashRouteRedirect />
      <ScrollToTop />
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

function HashRouteRedirect() {
  const { hash, pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const routesByHash: Record<string, string> = {
      '#home': '/',
      '#work': '/work',
      '#about': '/about',
      '#contact': '/contact',
    };

    const nextPath = routesByHash[hash];
    if (pathname === '/' && nextPath && nextPath !== pathname) {
      navigate(nextPath, { replace: true });
    }
  }, [hash, navigate, pathname]);

  return null;
}

function ScrollToTop() {
  const { key, pathname } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    const frame = window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'auto' }));
    const timer = window.setTimeout(() => window.scrollTo({ top: 0, behavior: 'auto' }), 80);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [key, pathname]);

  return null;
}
