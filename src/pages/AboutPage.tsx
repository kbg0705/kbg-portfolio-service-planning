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
          <div className="about-hero__metric"><strong>2년 9개월</strong><span>Service Planning Experience</span></div>
          <p>{profile.summary}</p>
          <div className="hero-actions">
            <Link className="primary-action" to="/contact">연락하기 <Mail size={18} /></Link>
            <Link className="secondary-action" to="/work">프로젝트 보기 <ArrowRight size={18} /></Link>
          </div>
        </header>

        <section className="about-proof" aria-label="경력 요약">
          <div><strong>3</strong><span>서비스 조직 경험</span></div>
          <div><strong>14</strong><span>Sprint 운영</span></div>
          <div><strong>4.29</strong><span>학부 GPA / 4.5</span></div>
          <div><strong>2026</strong><span>서비스디자인 석사과정</span></div>
        </section>

        <section className="about-section">
          <div className="about-section__heading">
            <p className="eyebrow">Experience</p>
            <h2>서비스의 앞단과 운영의 뒷단을 함께 기획했습니다.</h2>
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
          <div className="about-section__heading">
            <p className="eyebrow">How I work</p>
            <h2>링커리어 아카데미 업무와 맞닿은 네 가지 실행 역량</h2>
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
            <p className="eyebrow">Built with Codex</p>
            <h2>Planning to Product</h2>
            <p>
              이 포트폴리오는 정보구조와 콘텐츠, 화면 구성, 인터랙션을 직접 기획하고 Codex를 활용해 구현했습니다.
              요구사항을 코드로 구체화하고, 결과를 검증하며 반복 개선하는 방식으로 완성했습니다.
            </p>
          </div>
          <div className="tag-list" aria-label="포트폴리오 제작 방식">
            {['Information Architecture', 'Content Design', 'AI-assisted Development', 'QA & Iteration'].map((tag) => <span className="tag" key={tag}>{tag}</span>)}
          </div>
        </section>

        <section className="about-section about-records">
          <RecordGroup title="Education" items={profile.education} />
          <RecordGroup title="License" items={profile.certifications} />
          <RecordGroup title="Experience" items={profile.activities} />
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
