import { ArrowRight, UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ProjectCard } from '../components/ProjectCard';
import { profile } from '../data/profile';
import { featuredProjects } from '../data/projects';

export function PortfolioHomePage() {
  const representativeProjects = featuredProjects.slice(0, 3);
  const briefPrinciples = profile.principles.slice(0, 3);

  return (
    <>
      <Header />
      <main className="home-main">
        <section className="home-hero">
          <div>
            <p className="eyebrow">PRODUCT MANAGER · UX STRATEGY · AI</p>
            <h1>
              사용자의 막힘을 발견하고
              <br />
              <span>개발 가능한 제품 기준으로 구체화합니다.</span>
            </h1>
            <p>{profile.summary}</p>
            <div className="hero-actions">
              <Link className="primary-action" to="/work">
                프로젝트 보기 <ArrowRight size={18} />
              </Link>
              <Link className="secondary-action" to="/about">
                이력 보기 <UserRound size={18} />
              </Link>
            </div>
          </div>
        </section>

        <section className="home-section">
          <SectionTitle
            eyebrow="Works"
            title="대표 작업 3가지를 먼저 보여드립니다."
          />
          <div className="compact-grid home-featured-grid">
            {representativeProjects.map((project) => (
              <ProjectCard compact uniform key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section className="home-about">
          <p className="eyebrow">
            How I work
          </p>
          <h2>근거를 확인하고, 정책을 설계하고, 협업 가능한 기준으로 전달합니다.</h2>
          <div>
            {briefPrinciples.map((item, index) => (
              <article key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
          <Link className="detail-link" to="/about">
            About 김부경 <ArrowRight size={17} />
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
        전체 프로젝트 <ArrowRight size={17} />
      </Link>
    </div>
  );
}
