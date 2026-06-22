import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CareerSummary } from '../components/CareerSummary';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ProjectCard } from '../components/ProjectCard';
import { profile } from '../data/profile';
import { compactProjects, featuredProjects } from '../data/projects';

export function PortfolioHomePage() {
  const additional = [featuredProjects[4], featuredProjects[5], ...compactProjects];
  return <><Header /><main>
    <section className="home-hero">
      <div><p className="eyebrow">PRODUCT MANAGER · UX STRATEGY · AI</p><h1>사용자의 막힘을 발견해<br /><span>실행 가능한 제품으로 바꿉니다.</span></h1><p>{profile.profile[1]}</p><div className="hero-actions"><a className="primary-action" href="#featured">프로젝트 살펴보기 <ArrowRight size={18} /></a><a className="secondary-action" href="#career-summary">경력 한눈에 보기</a></div></div>
      <div className="signal-panel"><p className="eyebrow">SIGNAL → STRUCTURE → PRODUCT</p><h2>문제의 신호를 제품 결정으로 연결합니다.</h2><div className="signal-steps"><div><span>01</span><strong>Signal</strong><p>데이터 · VOC · 인터뷰</p></div><div><span>02</span><strong>Structure</strong><p>정책 · 상태 · 우선순위</p></div><div><span>03</span><strong>Product</strong><p>화면 · 협업 · 검증</p></div></div></div>
    </section>
    <section className="impact-strip"><div><strong>1.7×</strong><p>평균 참여시간 증가</p><span>실제 측정</span></div><div><strong>14</strong><p>LMS Sprint 운영</p><span>출시·산출물</span></div><div><strong>AI + Search</strong><p>RAG 근거 확인 UX</p><span>제품 설계</span></div><div><strong>FO / BO</strong><p>사용자와 운영 흐름 설계</p><span>Product Operations</span></div></section>
    <section id="featured" className="home-section"><SectionTitle eyebrow="Featured Case Studies" title="문제 정의와 제품 판단이 가장 잘 드러나는 작업" /><div className="featured-grid">{featuredProjects.slice(0, 4).map((project) => <ProjectCard key={project.slug} project={project} />)}</div></section>
    <CareerSummary />
    <section className="home-section"><SectionTitle eyebrow="Research & Additional Work" title="연구, AI 실험, 서비스 비즈니스 경험" /><div className="compact-grid">{additional.map((project) => <ProjectCard compact key={project.slug} project={project} />)}</div></section>
    <section className="home-about"><p className="eyebrow">How I work</p><h2>근거를 확인하고, 정책을 설계하고, 협업 가능한 기준으로 전달합니다.</h2><div>{profile.principles.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></article>)}</div><Link className="detail-link" to="/about">About 김부경 <ArrowRight size={17} /></Link></section>
  </main><Footer email={profile.email} /></>;
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <div className="section-heading-row"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div><Link to="/work">전체 프로젝트 <ArrowRight size={17} /></Link></div>;
}
