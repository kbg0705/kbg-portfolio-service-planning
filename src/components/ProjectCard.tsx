import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={`project-card project-card--${project.variant}`} id={project.id}>
      <div className="project-card__header">
        <span>{project.number}</span>
        <p>{project.service}</p>
      </div>
      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p className="project-tagline">{project.tagline}</p>
        <div className="project-logic">
          <ProjectFact label="Problem" value={project.problem} />
          <ProjectFact label="Decision" value={project.decision} />
          <div>
            <span>Impact</span>
            <ul>
              {project.impact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="tag-row" aria-label={`${project.title} 키워드`}>
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      {project.imageSlots ? (
        <div className="project-visuals" aria-label={`${project.title} 이미지 자리`}>
          {project.imageSlots.map((slot) => (
            <div className="visual-placeholder" key={slot} role="img" aria-label={`${slot} 이미지가 들어갈 영역`}>
              <span>{slot}</span>
            </div>
          ))}
        </div>
      ) : null}
      <Link className="detail-link" to={project.href} aria-label={`${project.title} 상세 페이지 준비 화면으로 이동`}>
        상세보기
        <ArrowUpRight size={18} aria-hidden="true" />
      </Link>
    </article>
  );
}

type ProjectFactProps = {
  label: string;
  value: string;
};

function ProjectFact({ label, value }: ProjectFactProps) {
  return (
    <div>
      <span>{label}</span>
      <p>{value}</p>
    </div>
  );
}
