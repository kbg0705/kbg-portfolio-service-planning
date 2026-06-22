export type CareerProjectLink = {
  label: string;
  slug: string;
};

export type CareerEntry = {
  period: string;
  company: string;
  role: string;
  summary: string;
  projects: CareerProjectLink[];
};

export const careerSummary: CareerEntry[] = [
  {
    period: '2025.03–현재',
    company: '프린트뱅크',
    role: '인쇄 이커머스 서비스 기획 · PM',
    summary: 'FO·BO 기능 개선, 신규 서비스 구축, 데이터 및 VOC 기반 제품 개선',
    projects: [
      { label: 'Printbank / NPB', slug: 'printbank-npb' },
      { label: 'PrintStudio', slug: 'print-studio' },
    ],
  },
  {
    period: '2024.07–2025.02',
    company: '비상교육',
    role: 'AIDT 시스템 기획',
    summary: 'AIDT 기반 인쇄 서비스, 매뉴얼, 공공기관 산출물, QA',
    projects: [{ label: 'AIDT', slug: 'visang-aidt' }],
  },
  {
    period: '2023.07–2024.02',
    company: 'Magic Ecole',
    role: 'LMS 서비스 기획 · PO',
    summary: '권한·콘텐츠 정책, 화면설계, 14개 Sprint 운영',
    projects: [{ label: 'Magic Ecole LMS', slug: 'magic-ecole' }],
  },
];
