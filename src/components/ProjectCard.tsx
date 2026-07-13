import type { MouseEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import type { Project } from '../types/project';
import { resolveAssetPath } from './common/ImagePlaceholder';

const workCardTitles: Record<string, string> = {
  'printbank-npb': 'PRINTBANK_CONVERSION',
  'magic-ecole': 'Magic Ecole LMS',
  'visang-aidt': '비상교육 AI 디지털교과서',
};

const thumbnailLabels: Record<string, string> = {
  'printbank-npb': '이커머스 / 서비스기획',
  'magic-ecole': '교육 SaaS / 서비스기획',
  'visang-aidt': '교육 서비스 / QA',
  'print-studio': '이커머스 / 신규구축',
  'printbank-main': '이커머스 / 데이터개선',
};

export function ProjectCard({
  project,
  compact = false,
  uniform = false,
  displayTitle,
}: {
  project: Project;
  compact?: boolean;
  uniform?: boolean;
  displayTitle?: string;
}) {
  const navigate = useNavigate();
  const detailPath = `/projects/${project.slug}`;
  const hasThumbnail = Boolean(project.thumbnail?.src);
  const title = displayTitle ?? workCardTitles[project.slug] ?? project.title;
  const visibleTags = project.tags.slice(0, uniform ? 2 : 3);
  const handleCardClick = (event: MouseEvent<HTMLElement>) => {
    if (!project.detailPageEnabled) return;
    const target = event.target as HTMLElement;
    if (target.closest('a,button')) return;
    navigate(detailPath);
  };

  return (
    <article className={`project-card ${uniform ? 'project-card--work' : `project-card--${project.tier}`}${compact ? ' is-compact' : ''}${project.detailPageEnabled ? ' project-card--is-clickable' : ''}`} onClick={handleCardClick}>
      <div className="project-card__meta"><span>{String(project.order).padStart(2, '0')}</span><p>{project.service}</p></div>
      {hasThumbnail && project.thumbnail ? (
        <ProjectThumbnail image={project.thumbnail} project={project} to={project.detailPageEnabled ? detailPath : undefined} title={title} uniform={uniform} />
      ) : uniform ? (
        <div className="project-card__media-placeholder" aria-hidden="true">
          <span>{String(project.order).padStart(2, '0')}</span>
          <strong>{project.service}</strong>
        </div>
      ) : null}
      <div className="project-card__content">
        <p className="project-card__category">{project.category.join(' / ')}</p>
        <h3>{title}</h3>
        <p className="project-card__tagline">{project.tagline}</p>
        {uniform ? (
          <div className="tag-list tag-list--supporting">{visibleTags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
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
      </div>
    </article>
  );
}

function ProjectThumbnail({
  image,
  project,
  title,
  to,
  uniform,
}: {
  image: NonNullable<Project['thumbnail']>;
  project: Project;
  title: string;
  to?: string;
  uniform?: boolean;
}) {
  const label = thumbnailLabels[project.slug] ?? project.category.join(' / ');
  const content = uniform ? (
    <div className={`project-thumb__cover project-thumb__cover--${project.slug}`}>
      <img className="project-thumb__image" src={resolveAssetPath(image.src!)} alt="" loading="lazy" />
      <div className="project-thumb__shade" aria-hidden="true" />
      <span className="project-thumb__badge">{label}</span>
      <span className="project-thumb__corner" aria-hidden="true">{String(project.order).padStart(2, '0')}</span>
    </div>
  ) : <img src={resolveAssetPath(image.src!)} alt={image.alt} loading="lazy" />;

  return (
    <div className={`project-thumb${uniform ? ' project-thumb--designed' : ''}`} aria-label={`${title} 썸네일`}>
      {to ? <Link className="project-thumb__link" to={to} aria-label={`${title} 상세 보기`}>{content}</Link> : content}
    </div>
  );
}
