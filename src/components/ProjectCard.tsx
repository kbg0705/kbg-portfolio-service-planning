import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../types/project';
import { ImagePlaceholder } from './common/ImagePlaceholder';

type CapabilityProof = {
  label: string;
  description: string;
};

export function ProjectCard({
  project,
  compact = false,
  uniform = false,
  capabilityProof,
  displayTitle,
}: {
  project: Project;
  compact?: boolean;
  uniform?: boolean;
  capabilityProof?: CapabilityProof;
  displayTitle?: string;
}) {
  const detailPath = `/projects/${project.slug}`;
  const hasThumbnail = Boolean(project.thumbnail?.src);
  const cardSummary = project.cardSummary ?? {
    problem: project.problem,
    role: project.role,
    result: project.impact[0] ? `${project.impact[0].value} ${project.impact[0].label}` : project.status,
  };
  const visibleTags = project.tags.slice(0, 3);

  return (
    <article className={`project-card ${uniform ? 'project-card--work' : `project-card--${project.tier}`}${compact ? ' is-compact' : ''}`}>
      <div className="project-card__meta"><span>{String(project.order).padStart(2, '0')}</span><p>{project.service}</p></div>
      {hasThumbnail && project.thumbnail ? (
        <ImagePlaceholder image={project.thumbnail} to={project.detailPageEnabled ? detailPath : undefined} />
      ) : uniform ? (
        <div className="project-card__media-placeholder" aria-hidden="true">
          <span>{String(project.order).padStart(2, '0')}</span>
          <strong>{project.service}</strong>
        </div>
      ) : null}
      <div className="project-card__content">
        <p className="project-card__category">{project.category.join(' / ')}</p>
        <h3>{displayTitle ?? project.title}</h3>
        {capabilityProof ? (
          <div className="project-card__capability">
            <strong>{capabilityProof.label}</strong>
            <p>{capabilityProof.description}</p>
          </div>
        ) : null}
        <p className="project-card__tagline">{project.tagline}</p>
        {uniform ? (
          <dl className="project-card__quickfacts">
            <div><dt>문제</dt><dd>{cardSummary.problem}</dd></div>
            <div><dt>한 일</dt><dd>{cardSummary.role}</dd></div>
            <div><dt>결과</dt><dd>{cardSummary.result}</dd></div>
          </dl>
        ) : null}
        {compact && !uniform ? <p className="project-card__description">{project.description ?? project.problem}</p> : !compact ? (
          <div className="project-card__logic">
            <div><span>문제</span><p>{project.problem}</p></div>
            <div><span>판단</span><p>{project.decision}</p></div>
          </div>
        ) : null}
        {!uniform ? (
          <>
            <div className="outcome-inline">
              {project.impact.slice(0, compact ? 2 : 3).map((item) => <span key={`${item.value}-${item.label}`} data-type={item.type}><strong>{item.value}</strong>{item.label}</span>)}
            </div>
            <div className="tag-list">{visibleTags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
          </>
        ) : null}
        {uniform ? (
          <div className="tag-list tag-list--supporting">{visibleTags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
        ) : null}
        {project.detailPageEnabled ? <Link className="detail-link" to={detailPath}>자세히 <ArrowUpRight aria-hidden="true" size={17} /></Link> : null}
      </div>
    </article>
  );
}
