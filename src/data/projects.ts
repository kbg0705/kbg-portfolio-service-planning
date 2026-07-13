import type { Project } from '../types/project';
import { makePlaceholder as image } from './imagePlaceholders';

export const featuredProjects: Project[] = [
  {
    slug: 'printbank-npb',
    order: 1,
    tier: 'featured',
    service: 'Printbank Conversion',
    category: ['Product', 'E-commerce'],
    title: '프린트뱅크 신규 이커머스 개편',
    tagline: '구두로 흩어진 운영 요구를 RP와 WBS로 구조화해 신규 이커머스의 실행 기준을 설계했습니다.',
    period: '2026.02–2026.06',
    role: '서비스 기획 · Product Manager',
    contribution: '문제 구조화 · 정책 설계 · 화면정의 · 개발 협의 · QA',
    status: '기획·개발·QA 병행',
    tools: ['Figma', 'Jira', 'Google Sheets', 'SQL/DB 구조 협의'],
    tags: ['문제 구조화', 'FO·BO 기획', '일정·QA 관리'],
    problem: '신규 인쇄 이커머스 구축 과정에서 상품·가격·회원·주문·출고 요구가 동시에 전달되어 개발 범위와 우선순위가 불명확했습니다.',
    decision: '운영 요구를 RP 단위로 분류하고 선·후행 관계와 구현 가능성을 기준으로 WBS와 정책 문서에 연결했습니다.',
    impact: [
      { value: 'RP', label: '운영 요구를 개발 과제로 전환', description: '상품·가격·회원·주문·출고 요구 구조화', type: 'delivered' },
      { value: 'WBS', label: '범위와 일정 확인 기준 마련', description: '기획·개발·운영 공통 실행 계획', type: 'delivered' },
    ],
    cardSummary: {
      problem: '운영자 요구와 FO·BO 정책이 동시에 늘어나 개발 범위와 일정 기준이 불명확했습니다.',
      role: '서비스 기획 · Product Manager로 RP, WBS, 정책, 화면정의, QA 기준을 연결했습니다.',
      result: '운영 요구를 개발 과제로 구조화하고 일정·QA 관리 기준을 마련했습니다.',
    },
    detailPageEnabled: true,
    thumbnail: { ...image('cover', '비식별화된 이커머스 실행 구조', '권장 비율 16:10 · 요구사항, RP, WBS, FO·BO 정책 연결을 보여주는 화면'), isConfidential: true },
  },
  {
    slug: 'printbank-main',
    order: 2,
    tier: 'featured',
    service: 'Printbank',
    category: ['Product', 'E-commerce'],
    title: 'Printbank 메인페이지 리뉴얼',
    tagline: '방문자의 탐색 상태를 읽고 상품·상담·주문 흐름이 이어지는 메인 경험으로 바꿨습니다.',
    period: '2025.07–2025.09',
    role: '서비스 기획',
    contribution: 'GA4 분석 · 문제 정의 · 정보 우선순위 · 화면 기획 · 디자이너 협업',
    status: '출시 및 지표 검증 완료',
    tools: ['GA4', 'Figma', 'Google Sheets'],
    tags: ['GA4 분석', '사용자 흐름', 'UX 개선'],
    problem: '사용자가 주문조회 상태에 머무르고 메인 배너와 신상품 콘텐츠의 탐색 성과가 낮았습니다.',
    decision: '방문 목적별 사용자 상태를 나누고 배너, 팝업, 상담 진입점의 정보 우선순위를 재정의했습니다.',
    impact: [
      { value: '1.7×', label: '평균 참여시간 증가', description: '1분 14초에서 2분 8초로 증가', type: 'measured' },
      { value: '1위', label: '전체 접속 페이지 순위', description: '메인페이지가 주문조회 페이지를 넘어 1위 달성', type: 'measured' },
      { value: 'Launch', label: '메인페이지 리뉴얼 출시', description: '배너·팝업·상담 진입 구조 개선', type: 'delivered' },
    ],
    cardSummary: {
      problem: '주문조회 중심 방문이 반복되고 메인 콘텐츠 탐색 성과가 낮았습니다.',
      role: 'GA4 분석, 정보 우선순위, 화면 기획, 디자이너 협업을 맡았습니다.',
      result: '평균 참여시간 1.7배 증가를 확인했습니다.',
    },
    detailPageEnabled: true,
    thumbnail: image('cover', 'Printbank 메인페이지 리뉴얼', '권장 비율 16:10 · 배너, 팝업, 상담 진입 구조를 개선한 메인 화면'),
  },
  {
    slug: 'magic-ecole',
    order: 2,
    tier: 'featured',
    service: 'Magic Ecole',
    category: ['Product', 'SaaS'],
    title: '교육 SaaS LMS 리뉴얼',
    tagline: '역할·권한과 콘텐츠 재사용 구조를 확장 가능한 LMS 운영 정책으로 재설계했습니다.',
    period: '2023.07–2024.02',
    role: '서비스 기획 · PO',
    contribution: '사용자 문제 정의 · 권한 정책 · 콘텐츠 구조 · 화면설계 · Scrum 운영',
    status: '기획 완료 · 단계적 개발',
    tools: ['Figma', 'Jira', 'Confluence', 'Google Docs'],
    tags: ['LMS 기획', '권한 정책', '콘텐츠 구조'],
    problem: '고정된 권한 체계와 낮은 콘텐츠 재사용성 때문에 새로운 역할, 강의, 운영 요구마다 추가 개발이 필요했습니다.',
    decision: '전역 권한과 강의 내부 권한을 분리하고 Custom Role, 콘텐츠 라이브러리, 운영자 설정 구조를 설계했습니다.',
    impact: [
      { value: '14', label: 'Sprint 운영', description: 'Jira 기반 개발 협업', type: 'delivered' },
      { value: '90%', label: '기획팀 업무 수행률', description: '준비 상태와 착수 기준 개선', type: 'measured' },
      { value: 'NIPA', label: '유망 SaaS 지원 사업 통과 기여', description: '외부 지원 선정', type: 'recognition' },
    ],
    cardSummary: {
      problem: '역할·권한과 콘텐츠 재사용 구조가 고정되어 운영 요구마다 추가 개발이 필요했습니다.',
      role: '서비스 기획 · PO로 권한 정책, 콘텐츠 구조, 화면설계, Jira 기반 협업을 수행했습니다.',
      result: '14개 Sprint 운영과 단계적 개발 착수 기준을 정리했습니다.',
    },
    detailPageEnabled: true,
    thumbnail: image('cover', '권한과 콘텐츠 구조', '권장 비율 16:10 · 권한 매트릭스와 LMS 계층 구조를 보여주는 이미지'),
  },
  {
    slug: 'tax-canvas',
    order: 3,
    tier: 'featured',
    service: 'Tax Canvas',
    category: ['Product', 'AI & Search'],
    title: '생성형 AI 세무 검색서비스 기획',
    tagline: 'AI의 답변을 기다리는 시간을 근거를 탐색하고 판단하는 경험으로 바꿨습니다.',
    period: '2024.04–2024.07',
    role: '서비스 기획 팀장 · PM',
    contribution: '제품 흐름 · AI 상태 UX · 검색·근거 구조 · 협업 프로세스',
    status: 'v1.1 요구사항 완료 · 개발 착수',
    tools: ['Figma', 'Jira', 'Confluence', 'RAG 구조 협의'],
    tags: ['생성형 AI', '검색 UX', '근거 설계'],
    problem: '긴 분석 시간, 복수 쟁점 비교, 결과 신뢰성 문제가 전문가의 판단 흐름을 끊었습니다.',
    decision: '부분 결과, 쟁점 이동, 재분석, 판례·예규 근거 확인을 하나의 검토 흐름으로 설계했습니다.',
    impact: [
      { value: 'v1.1', label: '개발 착수 가능한 요구사항 완료', description: '검색·근거·AI 상태 UX 포함', type: 'delivered' },
      { value: '외부 선정', label: '증빙 가능한 창업 지원 선정', description: '확인 가능한 항목만 표기', type: 'recognition' },
    ],
    detailPageEnabled: true,
    thumbnail: image('cover', 'AI 답변과 법적 근거 연결', '권장 비율 16:10 · 쟁점·분석 결과·근거 문서 연결 화면'),
  },
  {
    slug: 'print-studio',
    order: 4,
    tier: 'featured',
    service: 'PrintStudio',
    category: ['Product', 'E-commerce'],
    title: '명함 전문 인쇄 이커머스 신규 구축',
    tagline: '사용자의 주문 오류와 운영자의 반복 업무를 가이드와 시스템 연동으로 줄였습니다.',
    period: '2025.03–2025.07',
    role: '서비스 기획 · 구현 협업',
    contribution: '주문 흐름 · 파일 가이드 · 운영 자동화 · 반응형 화면 · UX Writing',
    status: '출시 완료',
    tools: ['Figma', 'Cafe24', 'Google Drive', '인트라넷'],
    tags: ['신규 구축', '운영 효율화', 'UX 문구'],
    problem: '작업 파일 오류로 CS가 반복되고 주문 정보를 수작업으로 옮겨야 했습니다.',
    decision: '업로드 시점에 상품별 가이드를 제공하고 주문과 인트라넷을 연결했습니다.',
    impact: [
      { value: '50%+', label: '주문 파일 가이드 이용률', description: '출시 후 실제 사용', type: 'measured' },
      { value: '30%', label: '운영 처리시간 단축', description: '주문·파일 처리 자동화', type: 'measured' },
      { value: 'Launch', label: '신규 이커머스 출시', description: '명함 전문 주문 서비스', type: 'delivered' },
    ],
    cardSummary: {
      problem: '파일 오류 CS와 주문 정보 수작업 이관이 반복됐습니다.',
      role: '주문 흐름, 파일 가이드, 운영 연동, UX 문구 기준을 기획했습니다.',
      result: '주문 파일 가이드 이용률과 운영 처리시간 개선을 확인했습니다.',
    },
    detailPageEnabled: true,
    thumbnail: image('cover', '주문과 파일 가이드 흐름', '권장 비율 16:10 · 사용자 주문 화면과 운영 연동 구조'),
  },
  {
    slug: 'print-decision-support',
    order: 5,
    tier: 'featured',
    service: 'Service Design Research',
    category: ['Service Design', 'Research', 'Academic'],
    title: '다중 옵션 상품의 고객 의사결정 지원',
    tagline: '상담 이후 이탈을 고객 맥락과 상품 체계 사이의 구조적 간극으로 정의했습니다.',
    period: '2026',
    role: '연구 · 서비스 기획',
    contribution: '인터뷰 · 그룹핑 · 서비스 구조 · 발표',
    status: '학술대회 발표',
    tools: ['User Interview', 'Affinity Mapping', 'Journey Map', 'Service Blueprint'],
    tags: ['의사결정 지원', '사용자 리서치', '서비스디자인'],
    problem: '고객은 상담 후에도 용도·예산·일정·품질을 비교할 선택 기준이 부족했습니다.',
    decision: '운영자의 경험적 추천을 목적·조건·근거 중심의 의사결정 지원 체계로 구조화했습니다.',
    impact: [
      { value: 'Conference', label: '2026 한국서비스디자인학회 춘계 학술대회 발표', description: '외부 발표', type: 'recognition' },
      { value: 'Research', label: '서비스 콘셉트 도출', description: '고객·운영자 문제 구조화', type: 'delivered' },
    ],
    detailPageEnabled: true,
    thumbnail: image('cover', '상담 의사결정 지원 구조', '권장 비율 16:10 · 고객 조건에서 추천 근거로 이어지는 서비스 구조'),
  },
  {
    slug: 'gachon-metaverse-campus',
    order: 6,
    tier: 'featured',
    service: 'Gachon Metaverse Campus',
    category: ['Product', 'Academic'],
    title: '메타버스 캠퍼스 UX 개선 및 콘텐츠 구축',
    tagline: '사용자가 길을 잃던 캠퍼스를 목적지와 콘텐츠가 연결되는 경험으로 개선했습니다.',
    period: '6개월',
    role: 'PM · 홍보단장',
    contribution: 'UX 개선 · 콘텐츠 기획 · 팀 운영 · 행사 운영',
    team: '8명',
    status: '리뉴얼 및 행사 운영 완료',
    tools: ['ZEP', 'Figma', 'User Feedback'],
    tags: ['메타버스', '이동 UX', '콘텐츠 기획'],
    problem: '넓은 공간에서 목적지를 찾기 어렵고 반복 참여할 콘텐츠가 부족했습니다.',
    decision: '포털·홈·차량 호출로 이동을 개선하고 학교 IP 기반 레이싱 콘텐츠와 행사를 운영했습니다.',
    impact: [
      { value: '100명', label: '2시간 행사 참여', description: '실제 참여 인원', type: 'measured' },
      { value: '4.5/5', label: '사용자 만족도', description: '행사 후 설문', type: 'measured' },
      { value: '8명', label: '프로젝트 팀 운영', description: 'PM 및 홍보단장', type: 'delivered' },
    ],
    detailPageEnabled: true,
    thumbnail: image('cover', '캠퍼스 이동과 레이싱 콘텐츠', '권장 비율 16:10 · 포털·버스·게임 동선'),
  },
];

export const compactProjects: Project[] = [
  { slug: 'visang-aidt', order: 7, tier: 'compact', service: 'Visang AIDT', category: ['Product', 'SaaS'], title: '비상교육 AI 디지털교과서 QA', tagline: '교사의 출력 니즈와 공공 QA 기준을 기능 요구사항과 검증 문서로 연결했습니다.', period: '2024.07–2025.02', role: '서비스 기획 · QA', contribution: '기능 기획 · 화면정의서 보완 · 기술검증 문서 작성 참여 · QA 자동화', status: '기획 및 품질 검증 참여', tools: ['Figma', 'Jira', 'Selenium'], tags: ['AIDT QA', '화면정의', '검증 문서'], problem: 'AI 디지털교과서 사용 상황에서 교사의 출력 니즈와 반복 테스트 기준을 함께 정의해야 했습니다.', decision: '사용 상황을 기준으로 인쇄 기능 우선순위를 정리하고 기능 문서, 매뉴얼, QA 시나리오로 검증 기준을 연결했습니다.', impact: [{ value: 'QA', label: '기능·문서·검증 기준 연결', description: '절감 수치는 별도 주장하지 않음', type: 'delivered' }], cardSummary: { problem: '교사 사용 상황과 공공 QA 기준을 기능 문서와 테스트 기준으로 연결해야 했습니다.', role: '서비스 기획 · QA로 화면정의서 보완, 기술검증 문서, Jira 기반 QA 협업에 참여했습니다.', result: '기능·문서·검증 기준을 연결한 QA 산출물을 정리했습니다.' }, detailPageEnabled: false, description: '교사의 출력 니즈를 사용 상황으로 정의하고 화면정의서, 기술검증 문서, QA 흐름으로 연결한 교육 서비스 프로젝트입니다.' },
  { slug: 'smooth-route', order: 8, tier: 'compact', service: 'SmoothRoute', category: ['AI & Search', 'Research'], title: 'AI·데이터 기반 대중교통 혼잡도 예측 UX', tagline: '혼잡 정보보다 사용자가 원하는 시간에 도착할 수 있는지를 먼저 보여줬습니다.', period: '2025.04–2025.05', role: '서비스 기획', contribution: '문제 정의 · PRD · UI · AI 기반 시선 검증', status: '프로토타입 검증', tools: ['Clueify', 'Creatie', 'Interview'], tags: ['AI UX', 'PRD', '시선 검증'], problem: '혼잡도 수치는 있었지만 사용자의 실제 질문인 도착 가능성에 답하지 못했습니다.', decision: '도착 가능 시간을 중심으로 UI를 재구성하고 AI 기반 히트맵과 클릭률 예측으로 비교했습니다.', impact: [{ value: '24%p', label: '시선 집중도 향상', description: 'AI 기반 시뮬레이션', type: 'simulated' }, { value: '12→28%', label: 'CTA 클릭률 예측 개선', description: '실사용 지표가 아닌 예측값', type: 'simulated' }], detailPageEnabled: false, description: 'AI 도구를 활용해 문제 정의, PRD 작성, 화면 설계, 시선 히트맵 기반 검증까지 수행했습니다.' },
  { slug: 'my-ai-service-business', order: 9, tier: 'compact', service: 'MY AI', category: ['AI & Search', 'Service Design', 'Academic'], title: 'AI 활용 관리 서비스 비즈니스 설계', tagline: 'AI 도구 선택과 구독 관리 문제를 B2C에서 B2B 운영 솔루션으로 확장했습니다.', period: 'Academic Project', role: '서비스 비즈니스 설계', contribution: '이해관계자 · BMC · Blueprint · Ecosystem', status: '학업 프로젝트 완료', tools: ['BMC', 'Service Blueprint', 'Ecosystem Map'], tags: ['서비스 비즈니스', 'AI 추천', 'B2B'], problem: '사용자는 상황에 맞는 AI 도구를 고르고 구독과 활용 내역을 관리하기 어려웠습니다.', decision: '이해관계자와 데이터 교환을 기준으로 B2C 추천에서 B2B 운영 구조까지 설계했습니다.', impact: [{ value: '4 Maps', label: '서비스 비즈니스 산출물', description: '이해관계자·BMC·블루프린트·생태계', type: 'delivered' }], detailPageEnabled: false, description: '이해관계자 맵, 비즈니스 모델 캔버스, 서비스 블루프린트, 생태계 맵으로 B2C에서 B2B 운영 솔루션까지 확장되는 구조를 설계했습니다.' },
  { slug: 'picar-ar-sns', order: 10, tier: 'compact', service: 'PICAR', category: ['Product', 'Academic'], title: '위치 기반 AR 길찾기 및 SNS', tagline: '장소 탐색부터 포즈 재현과 공유까지 하나의 촬영 경험으로 연결했습니다.', period: 'Graduation Project', role: '서비스 기획 · 구현', contribution: 'AR UX · 위치 기반 흐름 · SNS 구조', status: '졸업 프로젝트 완료', tools: ['AR', 'Location API', 'Mobile UX'], tags: ['AR', '위치 기반', 'SNS'], problem: '촬영 장소와 포즈를 찾고 결과를 공유하는 과정이 여러 서비스에 나뉘어 있었습니다.', decision: 'AR 길찾기, 투명도 포즈 가이드, 촬영 결과 공유를 하나의 흐름으로 설계했습니다.', impact: [{ value: 'Prototype', label: '위치 기반 AR SNS 구현', description: '졸업 프로젝트', type: 'delivered' }], detailPageEnabled: false, description: '위치 기반 AR 길찾기, 촬영 포즈 투명도 가이드, 촬영 결과 공유 SNS 흐름을 설계하고 구현한 졸업 프로젝트입니다.' },
];

const coverImages: Record<string, string> = {
  'printbank-npb': 'public/images/projects/printbank-npb/01-cover.png',
  'printbank-main': 'public/images/projects/printbank-main/01-cover.png',
  'magic-ecole': 'public/images/projects/magic-ecole/01-cover.png',
  'visang-aidt': 'public/images/projects/visang-aidt/01-cover.png',
  'tax-canvas': 'public/images/projects/tax-canvas/01-cover.png',
  'print-studio': 'public/images/projects/print-studio/01-cover.png',
  'print-decision-support': 'public/images/projects/print-decision-support/01-cover.png',
  'gachon-metaverse-campus': 'public/images/projects/gachon-metaverse-campus/01-cover.png',
  'smooth-route': 'public/images/projects/smooth-route/01-cover.png',
  'my-ai-service-business': 'public/images/projects/MYAI/01-cover.png',
  'picar-ar-sns': 'public/images/projects/PICAR/01-cover.png',
};

const featuredOrder = ['printbank-npb', 'magic-ecole', 'print-studio', 'printbank-main'];

featuredProjects.sort((a, b) => {
  const left = featuredOrder.indexOf(a.slug);
  const right = featuredOrder.indexOf(b.slug);
  if (left === -1 && right === -1) return a.order - b.order;
  if (left === -1) return 1;
  if (right === -1) return -1;
  return left - right;
});

const projectExposureOrder = ['printbank-npb', 'magic-ecole', 'visang-aidt', 'print-studio', 'printbank-main'];

const allProjects = [...featuredProjects, ...compactProjects].sort((a, b) => {
  const left = projectExposureOrder.indexOf(a.slug);
  const right = projectExposureOrder.indexOf(b.slug);
  if (left === -1 && right === -1) return a.order - b.order;
  if (left === -1) return 1;
  if (right === -1) return -1;
  return left - right;
});

const affiliations: Record<string, string> = {
  'printbank-npb': '(주)프린트뱅크',
  'printbank-main': '(주)프린트뱅크',
  'magic-ecole': '(주)매직에꼴',
  'tax-canvas': 'Tax Canvas',
  'print-studio': '(주)프린트뱅크',
  'print-decision-support': '학업 프로젝트',
  'gachon-metaverse-campus': '가천대학교 메타버스 홍보단',
  'visang-aidt': '비상교육',
  'smooth-route': '팁스터 연합동아리',
  'my-ai-service-business': '학업 프로젝트',
  'picar-ar-sns': '가천대학교 졸업 프로젝트',
};

allProjects.forEach((project, index) => {
  project.order = index + 1;
  project.affiliation = affiliations[project.slug];
  project.detailPageEnabled = true;
  const src = coverImages[project.slug];
  if (!src) return;
  project.thumbnail = project.thumbnail ?? image('cover', project.title, project.tagline);
  project.thumbnail.src = src;
});

export const projects = allProjects;
export const findProject = (slug?: string) => projects.find((project) => project.slug === slug);
