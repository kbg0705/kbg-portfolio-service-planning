import { ArrowRight, UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ProjectCard } from '../components/ProjectCard';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import '../styles/home-work.css';

const heroEvidence = [
  {
    title: '정책 설계',
    highlight: 'FO·BO / 권한 / 상태값',
    description: '화면과 운영 기준을 함께 정의합니다.',
  },
  {
    title: '출시 관리',
    highlight: 'WBS / RP / QA',
    description: '일정, 범위, 검수 기준을 맞춥니다.',
  },
  {
    title: '교육 도메인',
    highlight: 'LMS / AIDT / Jira',
    description: '학습자와 운영자 관점으로 기획합니다.',
  },
];

const homeWorkOrder = ['printbank-npb', 'magic-ecole', 'visang-aidt'];

const projectCapabilityProof = {
  'printbank-npb': {
    title: 'PRINTBANK_CONVERSION',
    label: 'FO·BO 통합 기획',
    description: '운영 요구를 RP·WBS·QA 기준으로 구조화',
  },
  'magic-ecole': {
    title: 'Magic Ecole LMS',
    label: '교육 SaaS 구조 설계',
    description: '역할·권한과 콘텐츠 재사용 구조 설계',
  },
  'visang-aidt': {
    title: '비상교육 AI 디지털교과서',
    label: '교육 서비스 QA',
    description: '교사 사용 상황을 기능 문서와 검증 기준으로 연결',
  },
} as const;

export function PortfolioHomePage() {
  const representativeProjects = homeWorkOrder
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is (typeof projects)[number] => Boolean(project));
  const briefPrinciples = profile.principles.slice(0, 3);

  return (
    <>
      <Header />
      <main className="home-main">
        <section className="home-hero" aria-labelledby="home-hero-title">
          <div className="home-hero__content">
            <p className="eyebrow">서비스 기획자</p>
            <h1 id="home-hero-title">
              문제를 구조화하고
              <span> 실행 기준으로 연결합니다.</span>
            </h1>
            <p className="home-hero__summary">
              FO·BO 기획, 운영정책, 일정·QA를 다룬 2년 9개월 경력의 서비스 기획자 김부경입니다.
            </p>

            <div className="hero-evidence" aria-label="제품 경험 핵심 근거">
              {heroEvidence.map((evidence, index) => (
                <article key={evidence.title}>
                  <div className="hero-evidence__meta">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <h2>{evidence.title}</h2>
                  </div>
                  <strong>{evidence.highlight}</strong>
                  <p>{evidence.description}</p>
                </article>
              ))}
            </div>

            <div className="hero-actions">
              <Link className="primary-action" to="/work">
                대표 프로젝트 보기 <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <Link className="secondary-action" to="/about">
                경력 및 소개 보기 <UserRound aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>
        </section>

        <section className="home-section">
          <SectionTitle
            eyebrow="대표 프로젝트"
            title="서비스 기획 역량 3가지"
          />
          <div className="compact-grid home-featured-grid">
            {representativeProjects.map((project) => (
              <ProjectCard
                compact
                uniform
                capabilityProof={projectCapabilityProof[project.slug as keyof typeof projectCapabilityProof]}
                displayTitle={projectCapabilityProof[project.slug as keyof typeof projectCapabilityProof]?.title}
                key={project.slug}
                project={project}
              />
            ))}
          </div>
        </section>

        <section className="home-about">
          <p className="eyebrow">소개</p>
          <h2>
            문제, 정책, 실행 기준을
            <br />
            한 흐름으로 정리합니다.
          </h2>
          <div>
            {briefPrinciples.map((item, index) => (
              <article key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
          <Link className="detail-link" to="/about">
            소개 보기 <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </section>
      </main>
      <Footer email={profile.email} />
    </>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-heading-row">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <Link to="/work">
        전체 보기 <ArrowRight aria-hidden="true" size={17} />
      </Link>
    </div>
  );
}
