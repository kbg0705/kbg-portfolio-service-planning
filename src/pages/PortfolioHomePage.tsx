import { ArrowRight, UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ProjectCard } from '../components/ProjectCard';
import { profile } from '../data/profile';
import { featuredProjects } from '../data/projects';

const heroEvidence = [
  {
    title: '역할과 권한 정책',
    highlight: 'Custom Role·상태·예외 기준',
    description: '사용자 역할과 운영 권한을 분리해 확장 가능한 서비스 정책으로 정리했습니다.',
  },
  {
    title: '콘텐츠와 운영 구조',
    highlight: '콘텐츠 재사용·FO/BO 연계',
    description: '콘텐츠 생산, 노출, 주문, CS가 이어지는 앞단과 뒷단의 흐름을 함께 설계했습니다.',
  },
  {
    title: '사용자 상태 검증',
    highlight: 'GA4·VOC·QA 시나리오',
    description: '사용자의 탐색 상태와 운영자의 처리 상태를 지표와 시나리오로 검증했습니다.',
  },
];

export function PortfolioHomePage() {
  const representativeProjects = featuredProjects.slice(0, 3);
  const briefPrinciples = profile.principles.slice(0, 3);

  return (
    <>
      <Header />
      <main className="home-main">
        <section className="home-hero" aria-labelledby="home-hero-title">
          <div className="home-hero__content">
            <p className="eyebrow">Weverse Company · Service Planning</p>
            <h1 id="home-hero-title">
              팬과 운영자가 만나는 서비스의 규칙을,
              <span> 제품 구조로 정리하는 김부경입니다.</span>
            </h1>
            <p className="home-hero__summary">
              역할·권한, 콘텐츠 구조, 사용자 상태, 운영 정책, FO·BO 연계를 기획하고 개발·운영·QA와 끝까지 맞춰본 경험을 담았습니다.
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
            title="서비스 기획 역량이 잘 드러나는 대표 작업 3가지입니다."
          />
          <div className="compact-grid home-featured-grid">
            {representativeProjects.map((project) => (
              <ProjectCard compact uniform key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section className="home-about">
          <p className="eyebrow">How I work</p>
          <h2>사용자 경험과 운영 기준이 어긋나는 지점을 찾아 제품 정책으로 연결합니다.</h2>
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
