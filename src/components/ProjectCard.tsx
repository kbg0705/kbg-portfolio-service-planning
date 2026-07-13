import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { projectDetails } from '../data/projectDetails';
import type { Project } from '../types/project';
import type { ProjectImage } from '../types/project';
import { resolveAssetPath } from './common/ImagePlaceholder';

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
  const slides = useProjectSlides(project);
  const hasThumbnail = slides.length > 0;
  const cardSummary = project.cardSummary ?? {
    problem: project.problem,
    role: project.role,
    result: project.impact[0] ? `${project.impact[0].value} ${project.impact[0].label}` : project.status,
  };
  const visibleTags = project.tags.slice(0, 3);

  return (
    <article className={`project-card ${uniform ? 'project-card--work' : `project-card--${project.tier}`}${compact ? ' is-compact' : ''}`}>
      <div className="project-card__meta"><span>{String(project.order).padStart(2, '0')}</span><p>{project.service}</p></div>
      {hasThumbnail ? (
        <ProjectThumbnailSlider slides={slides} to={project.detailPageEnabled ? detailPath : undefined} title={displayTitle ?? project.title} />
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

function useProjectSlides(project: Project) {
  return useMemo(() => {
    const detail = projectDetails.find((item) => item.slug === project.slug);
    const candidates = [
      project.thumbnail,
      detail?.feedbackBacklog?.image,
      ...(detail?.decisions.map((item) => item.image) ?? []),
      ...(detail?.artifacts ?? []),
      ...(detail?.images ?? []),
    ];
    const seen = new Set<string>();
    return candidates.filter((image): image is ProjectImage => {
      if (!image?.src || seen.has(image.src)) return false;
      seen.add(image.src);
      return true;
    }).slice(0, 4);
  }, [project]);
}

function ProjectThumbnailSlider({ slides, title, to }: { slides: ProjectImage[]; title: string; to?: string }) {
  const [index, setIndex] = useState(0);
  const canSlide = slides.length > 1;
  const next = (direction: -1 | 1) => setIndex((current) => (current + direction + slides.length) % slides.length);

  const imageTrack = (
    <div className="project-thumb-slider__track" style={{ transform: `translateX(-${index * 100}%)` }}>
      {slides.map((slide) => (
        <div className="project-thumb-slider__slide" key={slide.src}>
          <img src={resolveAssetPath(slide.src!)} alt={slide.alt} loading="lazy" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="project-thumb-slider" aria-label={`${title} 썸네일`}>
      {to ? <Link className="project-thumb-slider__link" to={to} aria-label={`${title} 상세 보기`}>{imageTrack}</Link> : imageTrack}
      {canSlide ? (
        <>
          <button className="project-thumb-slider__button project-thumb-slider__button--prev" type="button" onClick={() => next(-1)} aria-label="이전 썸네일">
            <ChevronLeft size={16} aria-hidden="true" />
          </button>
          <button className="project-thumb-slider__button project-thumb-slider__button--next" type="button" onClick={() => next(1)} aria-label="다음 썸네일">
            <ChevronRight size={16} aria-hidden="true" />
          </button>
          <div className="project-thumb-slider__dots" aria-hidden="true">
            {slides.map((slide, dotIndex) => <span className={dotIndex === index ? 'is-active' : undefined} key={slide.src} />)}
          </div>
        </>
      ) : null}
    </div>
  );
}
