import { Download } from 'lucide-react';
import { EmailCopyButton } from './EmailCopyButton';

type HeaderProps = {
  email: string;
  activeSection: string;
  onCopyEmail: () => void;
};

const navItems = [
  { id: 'work', label: 'WORK', href: '#work' },
  { id: 'process', label: 'PROCESS', href: '#process' },
  { id: 'about', label: 'ABOUT', href: '#about' },
];

export function Header({ email, activeSection, onCopyEmail }: HeaderProps) {
  return (
    <header className="site-header" data-scrolled={activeSection !== 'top'}>
      <a className="brand-lockup" href="#top" aria-label="메인 상단으로 이동">
        <strong>KB.</strong>
        <span>KIM BUGYEONG / PRODUCT MANAGER</span>
      </a>

      <nav className="global-nav" aria-label="주요 섹션 이동">
        {navItems.map((item) => (
          <a
            key={item.id}
            className={activeSection === item.id ? 'is-active' : undefined}
            href={item.href}
          >
            {item.label}
          </a>
        ))}
        <a className="nav-download" href="/resume/김부경_이력서.pdf" download>
          RESUME
          <Download size={14} aria-hidden="true" />
        </a>
        <EmailCopyButton email={email} onCopy={onCopyEmail} variant="text" />
      </nav>
    </header>
  );
}
