import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ImageModal } from '../components/common/ImageModal';
import { ProjectDetailView, detailSections } from '../components/project/ProjectDetailView';
import { profile } from '../data/profile';
import { findProjectDetail } from '../data/projectDetails';
import { findProject } from '../data/projects';
import type { ProjectImage } from '../types/project';

export function ProjectCasePage() {
  const { slug } = useParams();
  const project = findProject(slug);
  const detail = findProjectDetail(slug);
  const [active, setActive] = useState<string>('summary');
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [slug]);

  useEffect(() => {
    if (!project) return undefined;
    const frame = window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'auto' }));
    const timer = window.setTimeout(() => window.scrollTo({ top: 0, behavior: 'auto' }), 250);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [project]);

  const images = useMemo<ProjectImage[]>(() => {
    if (!project || !detail) return [];
    return [
      project.thumbnail,
      detail.feedbackBacklog?.image,
      ...detail.decisions.map((item) => item.image),
      ...detail.artifacts,
      ...detail.images,
    ].filter(Boolean) as ProjectImage[];
  }, [detail, project]);

  useEffect(() => {
    if (!detail) return undefined;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) setActive(visible.target.id);
    }, { rootMargin: '-30% 0px -55% 0px', threshold: 0.01 });
    detailSections.forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, [detail]);

  useEffect(() => {
    if (!project) return;
    document.title = `${project.title} | 김부경 서비스 기획자 포트폴리오`;
    const description = project.tagline;
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;
  }, [project]);

  if (!project || !detail) {
    return <><Header /><main className="page-shell not-found"><h1>프로젝트를 찾을 수 없습니다.</h1><Link to="/work">전체 프로젝트로 돌아가기</Link></main><Footer email={profile.email} /></>;
  }

  const openImage = (image: ProjectImage) => setModalIndex(Math.max(0, images.findIndex((item) => item.placeholderTitle === image.placeholderTitle)));

  return (
    <>
      <Header />
      <main className="project-page">
        <ProjectDetailView project={project} detail={detail} active={active} onOpen={openImage} />
      </main>
      <Footer email={profile.email} />
      {modalIndex !== null ? <ImageModal images={images} index={modalIndex} onClose={() => setModalIndex(null)} /> : null}
    </>
  );
}
