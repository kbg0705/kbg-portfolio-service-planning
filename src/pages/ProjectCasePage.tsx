import { Link, useParams } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ProjectDetailView } from '../components/project/ProjectDetailView';
import { profile } from '../data/profile';
import { findProjectDetail } from '../data/projectDetails';
import { findProject } from '../data/projects';

export function ProjectCasePage() {
  const { slug } = useParams();
  const project = findProject(slug);
  const detail = findProjectDetail(slug);
  if (!project || !detail) {
    return <><Header /><main className="page-shell not-found"><h1>프로젝트를 찾을 수 없습니다.</h1><Link to="/work">전체 프로젝트로 돌아가기</Link></main><Footer email={profile.email} /></>;
  }
  return <><Header /><main className="project-page"><ProjectDetailView project={project} detail={detail} active="summary" onOpen={() => undefined} /></main><Footer email={profile.email} /></>;
}
