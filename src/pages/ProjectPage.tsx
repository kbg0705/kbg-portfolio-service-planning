import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { findProject } from '../data/projects';

export function ProjectPage() {
  const { projectId } = useParams();
  const project = findProject(projectId);

  if (!project) {
    return (
      <main className="placeholder-page">
        <Link to="/" className="back-link">
          <ArrowLeft size={18} aria-hidden="true" />
          홈으로 돌아가기
        </Link>
        <h1>프로젝트를 찾을 수 없습니다.</h1>
      </main>
    );
  }

  return (
    <main className="placeholder-page">
      <Link to="/" className="back-link">
        <ArrowLeft size={18} aria-hidden="true" />
        홈으로 돌아가기
      </Link>
      <p className="eyebrow">Project Detail Placeholder</p>
      <h1>{project.title}</h1>
      <p>
        이 상세 페이지는 추후 같은 템플릿으로 확장될 예정입니다. 현재는 메인페이지 카드와
        라우트 연결을 검증하기 위한 placeholder입니다.
      </p>
      <dl>
        <div>
          <dt>Service</dt>
          <dd>{project.service}</dd>
        </div>
        <div>
          <dt>Problem</dt>
          <dd>{project.problem}</dd>
        </div>
      </dl>
    </main>
  );
}
