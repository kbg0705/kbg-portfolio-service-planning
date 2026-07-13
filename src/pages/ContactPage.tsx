import { ArrowUpRight, BriefcaseBusiness, Github, UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { profile } from '../data/profile';

export function ContactPage() {
  return (
    <>
      <Header />
      <main className="page-shell contact-page">
        <header className="page-hero">
          <p className="eyebrow">연락</p>
          <h1>문제와 실행 기준을 함께 정리하는 서비스 기획자가 되겠습니다.</h1>
          <p>프로젝트와 포트폴리오 관련 연락을 기다립니다.</p>
          <div className="hero-actions">
            <Link className="primary-action" to="/work">
              프로젝트 보기 <BriefcaseBusiness size={18} />
            </Link>
            <Link className="secondary-action" to="/about">
              이력 보기 <UserRound size={18} />
            </Link>
          </div>
        </header>
        <section className="contact-grid">
          <article>
            <span>이메일</span>
            <strong>{profile.email}</strong>
            <a href={`mailto:${profile.email}`}>메일 작성 <ArrowUpRight size={16} /></a>
          </article>
          <article>
            <span>깃허브</span>
            <strong>kbg0705</strong>
            <a href="https://github.com/kbg0705" target="_blank" rel="noreferrer">프로필 보기 <Github size={16} /></a>
          </article>
          <article>
            <span>다음</span>
            <strong>프로젝트 보기</strong>
            <Link to="/work">프로젝트 보기 <ArrowUpRight size={16} /></Link>
          </article>
        </section>
      </main>
      <Footer email={profile.email} />
    </>
  );
}
