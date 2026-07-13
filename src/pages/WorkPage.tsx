import { useMemo, useState } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ProjectCard } from '../components/ProjectCard';
import { profile } from '../data/profile';
import { projectCategories, type ProjectCategoryFilter } from '../data/projectCategories';
import { projects } from '../data/projects';

const academicProjectSlugs = new Set([
  'print-decision-support',
  'gachon-metaverse-campus',
  'smooth-route',
  'my-ai-service-business',
  'picar-ar-sns',
]);

export function WorkPage() {
  const [filter, setFilter] = useState<ProjectCategoryFilter>('전체');
  const filtered = useMemo(() => filter === '전체' ? projects : projects.filter((project) => project.category.includes(filter)), [filter]);
  const practicalProjects = filtered.filter((project) => !academicProjectSlugs.has(project.slug));
  const academicProjects = filtered.filter((project) => academicProjectSlugs.has(project.slug));

  return (
    <>
      <Header />
      <main className="page-shell">
        <header className="metric-hero">
          <strong>{projects.length}</strong>
          <div><span>프로젝트</span><p>{practicalProjects.length}개 실무 · {academicProjects.length}개 학업/연구</p></div>
        </header>
        <div className="filter-bar" aria-label="프로젝트 필터">
          {projectCategories.map((category) => <button type="button" key={category} aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>)}
        </div>
        <WorkGroup
          eyebrow="실무"
          title="실무 프로젝트"
          projects={practicalProjects}
        />
        <WorkGroup
          eyebrow="학업/연구"
          title="학업 및 연구 프로젝트"
          projects={academicProjects}
        />
      </main>
      <Footer email={profile.email} />
    </>
  );
}

function WorkGroup({
  eyebrow,
  title,
  projects,
}: {
  eyebrow: string;
  title: string;
  projects: typeof import('../data/projects').projects;
}) {
  if (!projects.length) return null;

  return (
    <section className="work-list">
      <div className="work-list__heading">
        <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>
      </div>
      <div className="work-grid">
        {projects.map((project) => <ProjectCard compact uniform key={project.slug} project={project} />)}
      </div>
    </section>
  );
}
