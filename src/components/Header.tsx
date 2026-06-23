import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const sections = [
  { id: 'home', label: 'HOME' },
  { id: 'work', label: 'WORK' },
  { id: 'about', label: 'ABOUT' },
  { id: 'contact', label: 'CONTACT' },
];

export function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return undefined;

    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: '-32% 0px -54% 0px', threshold: [0.08, 0.24, 0.5] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [isHome]);

  const navLink = (id: string, label: string) => {
    const className = isHome && activeSection === id ? 'active' : undefined;
    return isHome ? <a className={className} href={`#${id}`} key={id}>{label}</a> : <Link to={{ pathname: '/', hash: `#${id}` }} key={id}>{label}</Link>;
  };

  return <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}><Link className="brand-lockup" to={{ pathname: '/', hash: '#home' }}><strong>KB.</strong><span>KIM BUGYEONG / PRODUCT MANAGER</span></Link><nav className="global-nav" aria-label="주요 페이지">{sections.map((section) => navLink(section.id, section.label))}</nav></header>;
}
