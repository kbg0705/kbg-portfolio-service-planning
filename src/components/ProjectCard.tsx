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
        <p className="project-card__category">{project.category.join(' · ')}</p>
        <h3>{displayTitle ?? project.title}</h3>
        {capabilityProof ? (
          <div className="project-card__capability">
            <strong>{capabilityProof.label}</strong>
            <p>{capabilityProof.description}</p>
          </div>
        ) : null}
        <p className="project-card__tagline">{project.tagline}</p>
        {compact && !uniform ? <p className="project-card__description">{project.description ?? project.problem}</p> : !compact ? (
          <div className="project-card__logic">
            <div><span>Problem</span><p>{project.problem}</p></div>
            <div><span>Decision</span><p>{project.decision}</p></div>
          </div>
        ) : null}
        {!uniform ? (
          <>
            <div className="outcome-inline">
              {project.impact.slice(0, compact ? 2 : 3).map((item) => <span key={`${item.value}-${item.label}`} data-type={item.type}><strong>{item.value}</strong>{item.label}</span>)}
            </div>
            <div className="tag-list">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
          </>
        ) : null}
        {uniform && capabilityProof ? (
          <div className="tag-list tag-list--supporting">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
        ) : null}
        {project.detailPageEnabled ? <Link className="detail-link" to={detailPath}>더보기 <ArrowUpRight size={17} /></Link> : null}
      </div>
    </article>
  );
}
