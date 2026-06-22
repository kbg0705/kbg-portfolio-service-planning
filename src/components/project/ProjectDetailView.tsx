import { ArrowLeft, ArrowRight, List, LockKeyhole } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project, ProjectDetail, ProjectImage } from '../../types/project';
import { ImagePlaceholder } from '../common/ImagePlaceholder';

export const detailSections = ['summary', 'context', 'evidence', 'decisions', 'artifacts', 'collaboration', 'outcomes', 'learnings'] as const;

export function ProjectDetailView({ project, detail, active, onOpen }: { project: Project; detail: ProjectDetail; active: string; onOpen: (image: ProjectImage) => void }) {
  const overview = [['Period', project.period], ['Role', project.role], ['Contribution', project.contribution], ['Team', project.team ?? '프로젝트별 협업'], ['Status', project.status], ['Tools', project.tools.join(' · ')]];
  const labels = { measured: '실제 측정', delivered: '출시·산출물', recognition: '외부 선정', simulated: 'AI 예측·시뮬레이션' };
  return <>
    <header className="detail-hero"><Link to="/work" className="back-link"><ArrowLeft size={17} /> 전체 프로젝트</Link><div className="detail-hero__grid"><div><p className="eyebrow">Project {String(project.order).padStart(2, '0')} · {project.category.join(' · ')}</p><p className="detail-service">{project.service}</p><h1>{project.title}</h1><p className="detail-tagline">{project.tagline}</p><div className="tag-list">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></div>{project.thumbnail ? <ImagePlaceholder image={project.thumbnail} /> : null}</div></header>
    <section className="glance-grid">{overview.map(([label, value]) => <div key={label}><span>{label}</span><p>{value}</p></div>)}</section>
    <div className="detail-layout"><nav className="detail-toc" aria-label="상세 목차"><span>Contents</span>{detailSections.map((id) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined}><i />{id}</a>)}</nav><div className="detail-content">
      <Section id="summary" eyebrow="At a glance" title="문제, 판단, 결과"><div className="summary-grid"><Summary label="Problem" text={detail.executiveSummary.problem} /><Summary label="Decision" text={detail.executiveSummary.decision} /><Summary label="Outcome" text={detail.executiveSummary.outcome} /></div></Section>
      <Section id="context" eyebrow="Why this problem" title="제품이 풀어야 했던 구조적 문제"><div className="reading-column"><p>{detail.overview}</p><p>{detail.context}</p></div></Section>
      <Section id="evidence" eyebrow="Evidence" title="문제를 발견한 근거"><div className="evidence-grid">{detail.evidence.map((item, index) => <article key={item.label}><span>{String(index + 1).padStart(2, '0')}</span><h3>{item.label}</h3><p>{item.description}</p></article>)}</div></Section>
      <blockquote className="key-question"><span>Key Question</span><p>{detail.keyQuestion}</p></blockquote>
      <Section id="decisions" eyebrow="Product Decisions" title="근거를 제품 결정으로 전환한 과정" wide><div className="decision-list">{detail.decisions.map((item) => <article className="decision-item" key={item.number}><b>{item.number}</b><div><h3>{item.title}</h3><div className="decision-flow"><Fact label="Evidence" text={item.evidence} /><Fact label="Decision" text={item.decision} /><Fact label="Specification" text={item.specification} /><Fact label="Effect" text={item.effect} /></div></div>{item.image ? <ImagePlaceholder image={item.image} onOpen={() => onOpen(item.image!)} /> : null}</article>)}</div></Section>
      <Section id="artifacts" eyebrow="From policy to product" title="정책과 산출물" wide><div className="artifact-grid">{detail.artifacts.map((image) => <figure key={image.placeholderTitle}><ImagePlaceholder image={image} onOpen={() => onOpen(image)} /><figcaption>{image.caption}</figcaption></figure>)}</div></Section>
      <Section id="collaboration" eyebrow="Collaboration & Delivery" title="협업과 실행"><ol className="text-list">{detail.collaboration.map((item) => <li key={item}>{item}</li>)}</ol></Section>
      <Section id="outcomes" eyebrow="Outcome" title="성과 유형을 구분해 표시했습니다"><div className="outcome-grid">{detail.outcomes.map((item) => <article key={item.label} data-type={item.type}><span>{labels[item.type]}</span><strong>{item.value}</strong><h3>{item.label}</h3><p>{item.description}</p></article>)}</div></Section>
      <Section id="learnings" eyebrow="What I learned" title="한계와 다음 검증"><ul className="text-list">{detail.learnings.map((item) => <li key={item}>{item}</li>)}</ul></Section>
      {detail.confidentialityNote ? <aside className="confidentiality"><LockKeyhole /><p>{detail.confidentialityNote}</p></aside> : null}
      <nav className="project-navigation">{detail.previousProject ? <Link to={`/projects/${detail.previousProject}`}><ArrowLeft /> 이전</Link> : <span />}<Link to="/work"><List /> 전체</Link>{detail.nextProject ? <Link to={`/projects/${detail.nextProject}`}>다음 <ArrowRight /></Link> : <span />}</nav>
    </div></div>
  </>;
}

function Section({ id, eyebrow, title, wide, children }: { id: string; eyebrow: string; title: string; wide?: boolean; children: React.ReactNode }) { return <section id={id} className={`detail-section${wide ? ' detail-section--wide' : ''}`}><div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>{children}</section>; }
function Summary({ label, text }: { label: string; text: string }) { return <article><span>{label}</span><p>{text}</p></article>; }
function Fact({ label, text }: { label: string; text: string }) { return <div><span>{label}</span><p>{text}</p></div>; }
