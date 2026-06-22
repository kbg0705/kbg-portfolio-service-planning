import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../types/project';
import { ImagePlaceholder } from './common/ImagePlaceholder';

export function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <article className={`project-card project-card--${project.tier}${compact ? ' is-compact' : ''}`}>
      <div className="project-card__meta"><span>{String(project.order).padStart(2, '0')}</span><p>{project.service}</p></div>
      {project.thumbnail && !compact ? <ImagePlaceholder image={project.thumbnail} /> : null}
      <div className="project-card__content">
        <p className="project-card__category">{project.category.join(' · ')}</p>
        <h3>{project.title}</h3>
        <p className="project-card__tagline">{project.tagline}</p>
        {compact ? <p className="project-card__description">{project.description ?? project.problem}</p> : <div className="project-card__logic"><div><span>Problem</span><p>{project.problem}</p></div><div><span>Decision</span><p>{project.decision}</p></div></div>}
        <div className="outcome-inline">{project.impact.slice(0, compact ? 2 : 3).map((item) => <span key={`${item.value}-${item.label}`} data-type={item.type}><strong>{item.value}</strong>{item.label}</span>)}</div>
        <div className="tag-list">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
        {project.detailPageEnabled ? <Link className="detail-link" to={`/projects/${project.slug}`}>Case Study <ArrowUpRight size={17} /></Link> : null}
      </div>
    </article>
  );
}
