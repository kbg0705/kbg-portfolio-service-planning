export type ProjectId = 'npb' | 'magic-ecole' | 'tax-canvas' | 'print-studio';

export type Project = {
  id: ProjectId;
  number: string;
  service: string;
  title: string;
  tagline: string;
  problem: string;
  decision: string;
  impact: string[];
  tags: string[];
  href: string;
  variant: 'featured' | 'standard' | 'wide';
  imageSlots?: string[];
};

export const projects: Project[] = [
  {
    id: 'npb',
    number: '01',
    service: 'NPB',
    title: '인쇄 이커머스 제품 개선',
    tagline: '흩어진 운영 이슈를 제품 개선 체계로 전환하다.',
    problem:
      '회원·주문·배송·CS 기능이 개별적으로 확장되면서 상태와 운영 기준이 불명확했고, 반복적인 수작업과 커뮤니케이션 비용이 발생했습니다.',
    decision:
      'VOC와 운영 이슈를 FD와 RP 개선 백로그로 구조화하고, 영향도·긴급도·선행 관계를 기준으로 우선순위를 관리했습니다.',
    impact: ['메인페이지 평균 참여시간 1.7배 증가', '백오피스 운영 처리시간 30% 단축'],
    tags: ['Product Strategy', 'GA4', 'FO/BO', 'Policy', 'QA'],
    href: '/projects/npb',
    variant: 'featured',
    imageSlots: ['문제 및 백로그', '제품 화면', '지표 또는 결과'],
  },
  {
    id: 'magic-ecole',
    number: '02',
    service: 'Magic Ecole',
    title: '교육 SaaS LMS 리뉴얼',
    tagline: '반복 개발이 필요했던 권한과 콘텐츠 구조를 확장 가능한 정책으로 재설계하다.',
    problem:
      '고정된 권한 구조와 낮은 콘텐츠 재사용성으로 인해 새로운 운영 요구가 생길 때마다 개발 의존도가 높았습니다.',
    decision:
      '전역 권한과 강의 내부 권한을 분리하고, 사용자 정의 역할과 콘텐츠 라이브러리 구조를 설계했습니다.',
    impact: ['14개 Sprint 운영', '기획팀 업무 수행률 90%'],
    tags: ['SaaS', 'LMS', 'Permission', 'Scrum', 'Figma'],
    href: '/projects/magic-ecole',
    variant: 'standard',
  },
  {
    id: 'tax-canvas',
    number: '03',
    service: 'Tax Canvas',
    title: '생성형 AI 세무 검색서비스',
    tagline: 'AI가 답을 생성하는 시간을 신뢰할 수 있는 탐색 경험으로 바꾸다.',
    problem:
      'AI 분석 시간이 길고 결과의 신뢰성을 즉시 판단하기 어려웠으며, 여러 쟁점과 결과를 비교하는 과정도 복잡했습니다.',
    decision:
      '부분 결과, 쟁점 이동, 재분석, 판례·예규 근거 확인이 이어지는 사용자 흐름을 설계했습니다.',
    impact: ['RAG 기반 검색 및 근거 확인 UX 설계', '개발 착수 가능한 제품 요구사항 완성'],
    tags: ['Generative AI', 'RAG', 'Search UX', 'Trust'],
    href: '/projects/tax-canvas',
    variant: 'standard',
  },
  {
    id: 'print-studio',
    number: '04',
    service: 'PrintStudio',
    title: '신규 인쇄 이커머스 구축',
    tagline: '주문 파일 오류와 반복 운영 업무를 사용자 가이드와 자동화로 줄이다.',
    problem:
      '주문 파일 오류로 CS가 반복되고, 주문 데이터를 내부 시스템으로 옮기는 운영 업무가 수작업으로 이루어졌습니다.',
    decision: '상품별 작업 파일 가이드와 주문·인트라넷 연동 구조를 설계했습니다.',
    impact: ['파일 가이드 이용률 50% 이상', '운영 처리시간 단축'],
    tags: ['E-commerce', 'Automation', 'UX Writing', 'Operations'],
    href: '/projects/print-studio',
    variant: 'wide',
  },
];

export function findProject(projectId: string | undefined) {
  return projects.find((project) => project.id === projectId);
}
export type Project = {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  role: string;
  tags: string[];
  summary: string;
  impact: string;
};

export const projects: Project[] = [
  {
    id: 'npb-print-commerce',
    title: 'NPB 인쇄 이커머스 FO·BO 개선',
    subtitle: '주문 전환과 운영 효율을 함께 개선한 인쇄 커머스 고도화',
    period: '2023',
    role: 'Product Planning / Backoffice UX',
    tags: ['E-commerce', 'FO/BO', 'Operation'],
    summary:
      '프론트 주문 흐름과 백오피스 처리 단계를 함께 점검해 고객 주문 경험과 내부 운영 속도를 개선했습니다.',
    impact: '주문 입력 오류 감소, 운영자 확인 단계 단축, 상품 관리 구조 정비',
  },
  {
    id: 'magic-ecole-lms',
    title: 'Magic Ecole LMS 리뉴얼',
    subtitle: '학습자와 운영자의 핵심 흐름을 재정의한 LMS 개편',
    period: '2022',
    role: 'Service Planning / UX Research',
    tags: ['LMS', 'Renewal', 'Education'],
    summary:
      '기존 학습 관리 경험의 복잡도를 낮추고 강의 탐색, 수강, 관리 흐름을 재구성했습니다.',
    impact: '메뉴 구조 단순화, 수강 상태 가시성 개선, 운영 관리 화면 정리',
  },
  {
    id: 'tax-canvas-ai-search',
    title: 'Tax Canvas 생성형 AI 세무 검색서비스',
    subtitle: '전문 세무 정보를 대화형으로 탐색하는 AI 검색 서비스',
    period: '2024',
    role: 'AI Product Planning',
    tags: ['AI Search', 'Tax', 'RAG'],
    summary:
      '세무 질의의 맥락을 보존하며 신뢰 가능한 답변 구조와 출처 확인 경험을 설계했습니다.',
    impact: '질의 유형 정의, 답변 신뢰 요소 설계, MVP 정보 구조 수립',
  },
  {
    id: 'printstudio-build',
    title: 'PrintStudio 신규 구축',
    subtitle: '인쇄 상품 제작과 주문을 연결하는 신규 서비스 설계',
    period: '2024',
    role: 'Product Owner / UX Planning',
    tags: ['New Product', 'Print', 'Workflow'],
    summary:
      '인쇄 상품 선택부터 제작 옵션 설정, 주문 접수까지 이어지는 신규 제품 경험을 구축했습니다.',
    impact: 'MVP 범위 정의, 상품 옵션 정책 수립, 제작 흐름 와이어프레임 작성',
  },
  {
    id: 'aidt-print-service',
    title: 'AIDT 기반 인쇄 서비스 기획',
    subtitle: '디지털 교과 환경과 실물 인쇄 수요를 잇는 서비스 기획',
    period: '2025',
    role: 'Product Strategy',
    tags: ['AIDT', 'Print Service', 'Strategy'],
    summary:
      'AIDT 활용 맥락에서 교사와 학습자가 필요로 하는 출력, 제작, 배포 경험을 탐색했습니다.',
    impact: '사용 시나리오 도출, 서비스 기회 영역 정의, 초기 정책 방향 정리',
  },
];
