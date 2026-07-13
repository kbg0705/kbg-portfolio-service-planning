import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { label: '홈', to: '/' },
  { label: '프로젝트', to: '/work' },
  { label: '소개', to: '/about' },
  { label: '연락', to: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY >= 50);

    updateScrolled();
    window.addEventListener('scroll', updateScrolled, { passive: true });

    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return undefined;

    const syncHeaderHeight = () => {
      document.documentElement.style.setProperty('--p-header-current', `${header.offsetHeight}px`);
    };
    const observer = new ResizeObserver(syncHeaderHeight);

    syncHeaderHeight();
    observer.observe(header);

    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty('--p-header-current');
    };
  }, []);

  return (
    <header ref={headerRef} className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <Link className="brand-lockup" to="/">
        <strong>KB.</strong>
        <span>KIM BUGYEONG</span>
      </Link>
      <nav className="global-nav" aria-label="주요 페이지">
        {navItems.map((item) => (
          <NavLink
            end={item.to === '/'}
            key={item.to}
            to={item.to}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
