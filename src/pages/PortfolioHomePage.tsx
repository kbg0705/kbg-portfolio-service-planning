import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ProjectCard } from '../components/ProjectCard';
import { profile } from '../data/profile';
import { compactProjects, featuredProjects } from '../data/projects';

const fitItems = [
  {
    title: '제작 과정의 사용자 막힘 발견',
    body: '데이터·VOC·인터뷰를 통해 사용자가 작업 과정에서 멈추거나 이탈하는 지점을 발견하고 우선순위를 정합니다.',
    project: 'Printbank / NPB',
    slug: 'printbank-npb',
  },
  {
    title: '복잡한 요구사항을 직관적인 흐름으로 구조화',
    body: '다양한 사용자와 운영 조건을 정책·상태·예외 케이스로 정리해 이해하기 쉬운 제품 흐름으로 구체화합니다.',
    project: 'Magic Ecole LMS',
    slug: 'magic-ecole',
  },
  {
    title: '데이터와 사용자 반응으로 개선 검증',
    body: 'FO/BO 기획과 개발 협업 이후 지표와 사용자 반응을 확인하며 다음 개선 방향을 도출합니다.',
    project: 'PrintStudio',
    slug: 'print-studio',
  },
];

const makingSteps = [
  '사용자와 운영자의 문제를 함께 확인합니다.',
  '정책과 예외 케이스를 먼저 정리합니다.',
  '개발 이후 지표와 반응을 확인합니다.',
];

export function PortfolioHomePage() {
  const additional = [featuredProjects[4], featuredProjects[5], ...compactProjects];
  return <><Header /><main>
    <section className="home-hero">
      <div><p className="eyebrow">PRODUCT MANAGER · UX STRATEGY · AI</p><h1>사용자의 막힘을 발견해<br /><span>실행 가능한 제품으로 바꿉니다.</span></h1><p>데이터와 VOC를 제품 요구사항으로 구조화하고, 출시 이후 반응까지 확인합니다.</p><div className="hero-actions"><a className="primary-action" href="#featured">프로젝트 살펴보기 <ArrowRight size={18} /></a><a className="secondary-action" href="#fit-summary">핵심 역량과 경험 보기</a></div></div>
      <aside className="making-card" aria-labelledby="making-card-title"><p className="eyebrow">Product Approach</p><h2 id="making-card-title">제가 제품을 만드는 방식</h2><ul>{makingSteps.map((step) => <li key={step}>{step}</li>)}</ul></aside>
    </section>
    <section id="featured" className="home-section home-featured"><SectionTitle eyebrow="Featured Case Studies" title="문제 정의와 제품 판단이 가장 잘 드러나는 작업" href="#fit-summary" label="핵심 역량 보기" /><div className="featured-grid">{featuredProjects.slice(0, 4).map((project) => <ProjectCard key={project.slug} project={project} />)}</div></section>
    <section id="fit-summary" className="home-section fit-summary"><div className="section-heading-row"><div><p className="eyebrow">Fit Summary</p><h2>미리캔버스 Junior PM 역할과 맞닿은 경험</h2></div><a href="#additional-work">추가 경험 보기 <ArrowRight size={17} /></a></div><div className="fit-summary-grid">{fitItems.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.body}</p><Link to={`/projects/${item.slug}`}>{item.project} <ArrowRight size={15} /></Link></article>)}</div></section>
    <section id="additional-work" className="home-section"><SectionTitle eyebrow="Research & Additional Work" title="연구, AI 실험, 서비스 비즈니스 경험" href="#how-i-work" label="일하는 방식 보기" /><div className="compact-grid">{additional.map((project) => <ProjectCard compact key={project.slug} project={project} />)}</div></section>
    <section id="how-i-work" className="home-about"><p className="eyebrow">How I work</p><h2>근거를 확인하고, 정책을 설계하고, 협업 가능한 기준으로 전달합니다.</h2><div>{profile.principles.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></article>)}</div><a className="detail-link" href="#fit-summary">핵심 역량 다시 보기 <ArrowRight size={17} /></a></section>
  </main><Footer email={profile.email} /></>;
}

function SectionTitle({ eyebrow, title, href, label }: { eyebrow: string; title: string; href: string; label: string }) {
  return <div className="section-heading-row"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div><a href={href}>{label} <ArrowRight size={17} /></a></div>;
}
