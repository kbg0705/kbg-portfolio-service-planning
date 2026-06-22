import type { Project } from '../types/project';
import { featuredProjectsA } from './featuredProjectsA';
import { featuredProjectsB } from './featuredProjectsB';
import { compactProjects } from './compactProjects';

export const archiveProjects: Project[] = [
  {
    slug: 'recommendation', order: 11, tier: 'archive', service: 'Recommendation System', category: ['AI & Search', 'Academic'],
    title: '콘텐츠 추천 시스템', tagline: '추천 기준과 콜드스타트 문제를 코드로 학습했습니다.', period: 'Undergraduate Project',
    role: '데이터 분석 · 구현', contribution: '추천 로직 구현', status: '학업 프로젝트', tools: ['Python'], tags: ['Python', 'Recommendation', 'Data'],
    problem: '제한된 정보에서 추천 기준을 비교할 필요가 있었습니다.', decision: '사용자 특성과 콘텐츠 속성을 활용한 영화·웹툰 추천 로직을 구현했습니다.',
    impact: [{ value: 'Model', label: '추천 로직 구현', description: '학업 프로젝트', type: 'delivered' }], detailPageEnabled: false,
  },
  {
    slug: 'hci-vr', order: 12, tier: 'archive', service: 'HCI Research Lab', category: ['Research', 'Academic'],
    title: 'VR 사용성 연구', tagline: '사용자 관찰과 정성·정량 조사를 연구 현장에서 경험했습니다.', period: 'Research Experience',
    role: 'HCI 연구실 RA', contribution: '사용자 관찰 · 연구 지원 · 학술 활동', status: '연구 경험', tools: ['User Research', 'VR'], tags: ['HCI', 'VR', 'User Research'],
    problem: 'VR 환경의 행동과 사용성 이슈를 기록할 필요가 있었습니다.', decision: '사용자 관찰과 정성·정량 조사 및 학술 활동을 지원했습니다.',
    impact: [{ value: 'RA', label: 'VR 사용성 연구 지원', description: '공개 자료가 없어 텍스트 중심 제공', type: 'delivered' }], detailPageEnabled: false,
  },
];

export const featuredProjects = [...featuredProjectsA, ...featuredProjectsB];
export { compactProjects };
export const projects = [...featuredProjects, ...compactProjects, ...archiveProjects];
export const findProject = (slug?: string) => projects.find((project) => project.slug === slug);
