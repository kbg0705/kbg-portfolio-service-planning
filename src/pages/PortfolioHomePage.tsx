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
    title: '서비스 정책',
    highlight: 'FO·BO·권한·상태값',
    description: '고객 화면과 운영 화면의 정책, 상태, 예외 조건을 하나의 요구사항으로 연결했습니다.',
  },
  {
    title: '출시와 품질관리',
    highlight: 'WBS·RP·QA 시나리오',
    description: '일정, 범위, QA 기준을 문서화해 개발·운영 담당자가 같은 기준으로 실행하게 했습니다.',
  },
  {
    title: '교육 서비스 경험',
    highlight: 'LMS·AIDT·Jira 협업',
    description: '학습자와 운영자 관점의 화면정의, QA, 개발 협업을 교육 도메인에서 수행했습니다.',
  },
];

const homeWorkOrder = ['printbank-npb', 'magic-ecole', 'visang-aidt'];

const projectCapabilityProof = {
  'printbank-npb': {
    title: 'PRINTBANK_CONVERSION',
    label: 'FO·BO 통합 기획',
    description: '운영자 요구사항을 RP·WBS·QA 기준으로 구조화한 전면 개편 경험',
  },
  'magic-ecole': {
    title: 'Magic Ecole LMS',
    label: '교육 SaaS 구조 설계',
    description: '역할·권한과 콘텐츠 재사용 구조를 설계한 LMS 기획 경험',
  },
  'visang-aidt': {
    title: '비상교육 AI 디지털교과서',
    label: '교육 서비스 QA',
    description: '교사 사용 상황과 공공 QA 기준을 기능 문서와 검증 흐름으로 연결한 경험',
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
            <p className="eyebrow">Service Planning</p>
            <h1 id="home-hero-title">
              사용자 문제를 구조화하고,
              <span> 서비스로 해결하는 서비스 기획자 김부경입니다.</span>
            </h1>
            <p className="home-hero__summary">
              웹 서비스의 FO·BO 기획부터 운영정책, 예외사항, 일정·QA 관리까지 연결해 온 2년 9개월 경력의 서비스 기획자입니다.
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
            eyebrow="Works"
            title="링커리어 아카데미 포지션에 맞춘 대표 프로젝트"
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
          <p className="eyebrow">About</p>
          <h2>
            사용자 문제와 운영 기준이 어긋나는 지점을 찾아
            <br />
            서비스 정책과 실행 기준으로 연결합니다.
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
            About 김부경 <ArrowRight aria-hidden="true" size={17} />
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
        전체 프로젝트 <ArrowRight aria-hidden="true" size={17} />
      </Link>
    </div>
  );
}
