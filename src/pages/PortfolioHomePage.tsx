import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { profile } from '../data/profile';

const representativeProjects = [
  {
    number: '01',
    meta: '프린트뱅크 · Product Manager · 2025–현재',
    slug: 'printbank-npb',
    title: '인쇄 이커머스 제품 개선',
    description: '회원·주문·배송·CS의 운영 기준을 정리하고, 반복되는 현장 이슈를 제품 요구사항으로 구체화했습니다.',
    tag: 'FO/BO · 운영 개선',
  },
  {
    number: '02',
    meta: 'Magic Ecole · Product Owner · 2023–2024',
    slug: 'magic-ecole',
    title: '교육 SaaS LMS 리뉴얼',
    description: '운영자 인터뷰를 바탕으로 권한과 콘텐츠 구조를 재설계해 반복 개발과 운영 문의를 줄였습니다.',
    tag: 'SaaS · 정책 설계',
  },
  {
    number: '03',
    meta: '프린트뱅크 · Product Manager · 2025–현재',
    slug: 'print-studio',
    title: '명함 전문 인쇄 이커머스 신규 구축',
    description: '파일 가이드와 주문 정보 연동을 설계해 사용자의 주문 오류와 운영자의 반복 업무를 줄였습니다.',
    tag: '신규 구축 · 주문 UX',
  },
];

const aboutSummary = ['사용자 문제 발견', '제품 요구사항 구조화', '출시 이후 검증'];

export function PortfolioHomePage() {
  return <><Header /><main>
    <section id="home" className="home-hero home-hero--balanced">
      <div className="home-hero__copy"><p className="eyebrow">PRODUCT MANAGER · SERVICE PLANNING</p><h1><span>사용자의 막힘을 발견하고</span><span>개발 가능한 제품 기준으로 구체화합니다.</span></h1><p>데이터와 VOC를 바탕으로 문제를 정의하고, 정책·상태·예외 케이스를 설계해 출시 이후 반응까지 확인합니다.</p><div className="hero-actions"><a className="primary-action" href="#work">프로젝트 보기 <ArrowRight size={18} /></a><a className="secondary-action" href="#about">이력 보기</a></div></div>
    </section>
    <section id="work" className="home-section home-work"><div className="section-heading-row home-work__heading"><div><p className="eyebrow">REPRESENTATIVE WORK</p><h2>미리캔버스 Junior PM 역량을 보여주는 대표 프로젝트</h2></div><Link to="/work">전체 프로젝트 보기 <ArrowRight size={17} /></Link></div><div className="work-project-grid work-project-grid--representative">{representativeProjects.map((project) => <article className="home-work-card" key={project.slug}><div className="home-work-card__meta"><span>{project.number}</span><p>{project.meta}</p></div><div className="home-work-card__thumb" aria-hidden="true" /><div className="home-work-card__body"><h3>{project.title}</h3><p>{project.description}</p><div className="home-work-card__tag">{project.tag}</div><Link className="detail-link" to={`/projects/${project.slug}`}>프로젝트 보기 <ArrowRight size={17} /></Link></div></article>)}</div></section>
    <section id="about" className="home-section home-about-summary"><div className="section-heading-row"><div><p className="eyebrow">About</p><h2>문제를 제품 요구사항으로 바꾸는 PM입니다.</h2></div><Link className="secondary-action" to="/about">이력 보기</Link></div><div className="about-summary-layout"><p>{profile.summary}</p><div>{aboutSummary.map((item) => <span key={item}>{item}</span>)}</div></div></section>
  </main><Footer email={profile.email} /></>;
}
