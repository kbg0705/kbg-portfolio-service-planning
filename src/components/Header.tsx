import { Download } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { profile } from '../data/profile';

export function Header() {
  return <header className="site-header"><NavLink className="brand-lockup" to="/"><strong>KB.</strong><span>KIM BUGYEONG / PRODUCT MANAGER</span></NavLink><nav className="global-nav" aria-label="주요 페이지"><NavLink to="/" end>HOME</NavLink><NavLink to="/work">WORK</NavLink><NavLink to="/about">ABOUT</NavLink><a className="nav-download" href={profile.resume} download>RESUME <Download size={14} /></a></nav></header>;
}
