import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { profile } from '../data/profile';

export function AboutPage() {
  return (
    <>
      <Header />
      <main className="page-shell about-page">
        <header className="about-hero">
          <div className="about-hero__metric"><strong>2년 9개월</strong><span>서비스 기획 경력</span></div>
          <p>{profile.summary}</p>
          <div className="hero-actions">
            <Link className="primary-action" to="/contact">연락하기 <Mail size={18} /></Link>
            <Link className="secondary-action" to="/work">프로젝트 보기 <ArrowRight size={18} /></Link>
          </div>
        </header>

        <section className="about-proof" aria-label="경력 요약">
          <div><strong>3</strong><span>협업 프로젝트 경험</span></div>
          <div><strong>14</strong><span>Sprint 운영</span></div>
          <div><strong>4.29</strong><span>학부 GPA / 4.5</span></div>
          <div><strong>3</strong><span>직무 관련 자격</span></div>
        </section>

        <section className="about-section">
          <div className="about-section__heading">
            <p className="eyebrow">경력</p>
            <h2>화면과 운영 기준을 함께 기획했습니다.</h2>
          </div>
          <div className="career-list">
            {profile.career.map((item, index) => (
              <article className="career-item" key={item.company}>
                <div className="career-item__index">{String(index + 1).padStart(2, '0')}</div>
                <div className="career-item__meta">
                  <span>{item.period}</span>
                  <span className="career-item__duration">{item.duration}</span>
                  <strong>{item.company}</strong>
                  <p>{item.role} · {item.team}</p>
                </div>
                <div className="career-item__body">
                  <p>{item.summary}</p>
                  <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section">
          <div className="about-section__heading about-section__heading--compact">
            <p className="eyebrow">역량</p>
            <h2>
              서비스 기획
              <br />
              실행 역량
            </h2>
          </div>
          <div className="capability-grid">
            {profile.capabilities.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="tag-list">{item.tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section planning-product">
          <div>
            <p className="eyebrow">제작 방식</p>
            <h2>기획에서 구현까지</h2>
            <p>
              정보구조, 콘텐츠, 화면 구성을 직접 기획하고 Codex로 구현했습니다.
              요구사항을 코드로 구체화하며 검증과 개선을 반복했습니다.
            </p>
          </div>
          <div className="tag-list" aria-label="포트폴리오 제작 방식">
            {['정보구조', '콘텐츠 설계', 'AI 활용 구현', '검증과 개선'].map((tag) => <span className="tag" key={tag}>{tag}</span>)}
          </div>
        </section>

        <section className="about-section about-records">
          <RecordGroup title="학력" items={profile.education} />
          <RecordGroup title="자격" items={profile.certifications} />
          <RecordGroup title="활동" items={profile.activities} />
        </section>
      </main>
      <Footer email={profile.email} />
    </>
  );
}

function RecordGroup({ title, items }: { title: string; items: Array<{ period: string; name: string; detail?: string; issuer?: string }> }) {
  return (
    <section>
      <p className="eyebrow">{title}</p>
      <div>
        {items.map((item) => (
          <article key={`${item.period}-${item.name}`}>
            <span>{item.period}</span>
            <strong>{item.name}</strong>
            <p>{item.detail ?? item.issuer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
