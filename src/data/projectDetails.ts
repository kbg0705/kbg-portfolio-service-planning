import type { ProjectDetail, ProjectImage } from '../types/project';
import { projects } from './projects';

const project = (slug: string) => projects.find((item) => item.slug === slug)!;

const asset = (
  type: ProjectImage['type'],
  src: string,
  title: string,
  description: string,
  aspectRatio: ProjectImage['aspectRatio'] = '16:10',
): ProjectImage => ({
  src,
  alt: title,
  caption: description,
  type,
  aspectRatio,
  placeholderTitle: title,
  placeholderDescription: description,
});

export const projectDetails: ProjectDetail[] = [
  {
    slug: 'printbank-npb',
    overview: '구두로 흩어진 운영 요구를 개발 가능한 제품 과제와 실행 순서로 전환해야 했습니다.',
    context: '신규 인쇄 이커머스 구축 과정에서 기존 운영 정책과 예외사항은 문서화되어 있지 않고 담당자의 경험과 구두 전달에 의존하고 있었습니다. 동시에 상품, 가격, 회원, 주문, 출고 요구가 함께 전달되어 개발 범위와 우선순위가 불명확했고, 고객 주문 흐름과 운영자 처리 흐름을 FO와 BO에서 함께 설계해야 했습니다.',
    problemFlow: ['구두 요구·운영 경험', '상품·가격·회원·주문·출고 요구', 'FO 고객 주문 흐름', 'BO 운영 처리 흐름', 'RP·WBS 실행 기준'],
    executiveSummary: {
      problem: '운영 요구와 예외사항이 구두로 전달되어 개발 범위, 우선순위, FO·BO 정책 기준이 불명확했습니다.',
      decision: '요구사항을 RP 단위로 구조화하고 주문 완료, 운영 필수성, 선행 조건, 예외 영향도, 일정 내 구현 가능성을 기준으로 우선순위를 정했습니다.',
      outcome: '운영자의 언어를 개발 가능한 과제와 주차별 실행 계획으로 전환해 기획·개발·운영자가 같은 기준으로 범위와 일정을 확인할 수 있게 했습니다.',
    },
    evidence: [
      { label: '운영자 인터뷰', description: '상품 등록, 가격 관리, 회원 승인, 주문, 출고 업무별 프로세스와 예외사항을 수집했습니다.' },
      { label: '기존 화면과 실제 흐름 비교', description: '화면에 드러난 기능과 실제 운영자가 처리하는 순서가 어긋나는 지점을 확인했습니다.' },
      { label: '반복 문의와 운영 혼선 확인', description: '주문 완료, 승인, 출고 처리에서 추가 확인이 반복되는 구간을 기능·정책·데이터 이슈로 나누었습니다.' },
      { label: '기존 정책과 신규 요구 차이 정리', description: '기존 서비스에서 암묵적으로 처리되던 규칙과 신규 이커머스에서 명시해야 할 정책을 분리했습니다.' },
    ],
    feedbackBacklog: {
      title: 'From Requirement to RP & WBS',
      subtitle: '요구사항을 RP와 WBS로 전환했습니다.',
      body: '운영자가 전달한 요구를 그대로 기능 목록으로 옮기지 않고, 고객 주문 완료에 필요한 흐름과 운영자가 반드시 처리해야 하는 기능으로 분리했습니다. 각 항목은 RP 단위로 묶고 선·후행 관계와 담당 범위를 반영해 WBS에서 실행 순서를 확인할 수 있게 재구성했습니다.',
      flow: ['운영 요구', '문제 정의', 'RP 구조화', 'WBS 실행 계획'],
      image: {
        ...asset('artifact', 'public/images/projects/printbank-npb/02-integrated-backlog.png', 'Printbank Conversion 실행 구조', '요구사항, RP, WBS, 개발 상태를 연결한 비식별화 산출물'),
        isConfidential: true,
      },
      secondaryCaption: '실제 내부 문서와 WBS 원본은 공개하지 않고 포트폴리오용으로 단순화했습니다.',
    },
    keyQuestion: '구두로 전달되는 운영 요구를 어떻게 개발 가능한 제품 과제와 실행 순서로 바꿀 수 있을까?',
    decisionCriteria: [
      '주문 완료에 반드시 필요한 고객 핵심 흐름인가',
      '운영자가 서비스 운영을 위해 반드시 필요한 기능인가',
      '다른 기능의 선행 조건인가',
      '예외 발생 시 주문 또는 출고에 큰 영향을 주는가',
      '개발 리소스와 일정 내 구현 가능한가',
    ],
    decisions: [
      {
        number: '01',
        title: '요구사항을 RP 단위로 구조화',
        evidence: '상품, 가격, 회원, 주문, 출고 요구가 동시에 전달되어 기능 목록만으로는 범위와 선후관계를 판단하기 어려웠습니다.',
        decision: '개별 요청을 모두 동일하게 처리하지 않고 주문 흐름과 운영 흐름을 기준으로 RP 단위로 묶었습니다.',
        specification: '각 RP에 관련 화면, 정책, 상태값, 예외조건, 담당 범위, 개발 상태를 연결했습니다.',
        effect: '기획·개발·운영자가 같은 단위로 범위, 우선순위, 진행 상태를 논의할 수 있게 됐습니다.',
      },
      {
        number: '02',
        title: 'Impact × Dependency 기준으로 우선순위 판단',
        evidence: '주문 완료에 직접 영향을 주는 기능, 운영 처리에 필요한 기능, 다른 기능의 선행 조건이 섞여 있었습니다.',
        decision: '주문 완료 영향도와 기능 의존도를 기준으로 사용자 핵심 흐름과 운영 필수 기능을 먼저 배치했습니다.',
        specification: '회원 승인, 상품·가격 정책, 주문 상태, 출고 처리처럼 후속 기능의 전제가 되는 항목을 선행 RP로 정리했습니다.',
        effect: '모든 요구를 같은 무게로 처리하지 않고 일정 내 실행 가능한 순서로 좁힐 수 있었습니다.',
      },
      {
        number: '03',
        title: 'FO와 BO 정책을 하나의 서비스 흐름으로 통합',
        evidence: '고객 주문 흐름과 운영자 처리 흐름이 분리되어 화면별 설계만으로는 상태 변화와 책임 범위를 설명하기 어려웠습니다.',
        decision: '고객의 주문 단계와 운영자의 승인·처리·출고 단계를 하나의 상태 흐름으로 연결했습니다.',
        specification: '화면정의서와 정책 문서에 상태값, 처리 조건, 예외 케이스, QA 기준을 함께 기록했습니다.',
        effect: '개발 과정에서 누락과 해석 차이를 줄이고 QA에서 정책과 실제 구현 결과를 같은 기준으로 검증할 수 있게 했습니다.',
      },
    ],
    artifacts: [],
    executionFlow: ['요구사항 수집', 'RP 분류', '정책·상태값 매핑', 'WBS 작성', 'Figma·정책 문서 공유', 'Jira 이슈 관리', 'QA 검증'],
    collaboration: [
      '요구사항을 기능 단위 RP로 분류하고 관련 화면, 정책, 상태값, 예외조건을 함께 매핑했습니다.',
      'RP별 선·후행 관계와 담당 범위를 반영해 WBS를 작성하고 프로젝트의 전체 범위와 주차별 실행 계획을 정리했습니다.',
      'Figma 화면정의서, 정책 문서, Jira 이슈를 통해 디자이너·개발자·운영자가 같은 기준으로 일정과 이슈를 확인하도록 연결했습니다.',
      'QA 과정에서 정책 문서와 실제 구현 결과를 대조해 누락된 상태값과 예외 처리 기준을 검증했습니다.',
    ],
    outcomes: [
      { value: 'RP', label: '구두 요구를 개발 가능한 과제로 전환', description: '상품·가격·회원·주문·출고 요구를 실행 단위로 구조화', type: 'delivered' },
      { value: 'WBS', label: '범위와 주차별 실행 계획 수립', description: '기획·개발·운영자가 일정과 담당 범위를 확인할 기준 마련', type: 'delivered' },
      { value: 'FO·BO', label: '고객 흐름과 운영 흐름 통합', description: '주문 상태와 운영 처리 정책을 하나의 서비스 흐름으로 정리', type: 'delivered' },
    ],
    learnings: [
      '요청을 그대로 전달하는 것이 아니라, 현장의 언어를 서비스 과제와 실행 순서로 번역하는 것이 기획자의 역할임을 배웠습니다.',
      '운영 경험을 정책으로 옮길 때는 정상 흐름뿐 아니라 예외 발생 시 주문과 출고에 미치는 영향을 함께 판단해야 합니다.',
      '출시 전 프로젝트에서는 확인되지 않은 성과 수치보다 범위, 기준, 실행 계획, 검증 구조를 명확히 보여주는 것이 더 정직합니다.',
    ],
    confidentialityNote: '회사 내부 정보 보호를 위해 실제 관리자 화면과 정책 문서는 비식별화하거나 재구성해 제공합니다.',
    images: [],
    nextProject: 'printbank-main',
  },
  {
    slug: 'printbank-main',
    overview: '주문조회 페이지에 방문이 집중되고 신상품 구매가 부진해 메인페이지의 역할, 사용자 상태, 콘텐츠 우선순위를 다시 정의할 필요가 있었습니다.',
    context: 'GA4 데이터를 통해 메인페이지 진입 직후 이탈, 메인 팝업의 방해, 낮은 배너 주목도를 확인했습니다. 기존 고객의 주문조회 상태를 보존하면서 신규 탐색과 상담 진입을 강화하는 방향으로 리뉴얼했습니다.',
    executiveSummary: {
      problem: '메인페이지가 상품 탐색보다 팝업 닫기와 주문조회 진입에 가까운 화면으로 작동했습니다.',
      decision: '방문 목적별 사용자 상태를 구분하고 메인 배너, 팝업, 고객센터와 실시간 상담 진입점의 우선순위를 조정했습니다.',
      outcome: '평균 참여시간이 1분 14초에서 2분 8초로 약 1.7배 증가하고 메인페이지가 전체 접속 페이지 1위를 달성했습니다.',
    },
    evidence: [
      { label: 'GA4 페이지 순위', description: '메인페이지보다 주문조회 페이지의 접속 순위가 높다는 점을 확인했습니다.' },
      { label: '평균 참여시간', description: '활성 사용자당 평균 참여시간과 리뉴얼 전후 변화를 비교했습니다.' },
      { label: '초기 진입 구조 분석', description: '중앙 팝업과 DIMMED 화면이 사용자 상태 전환과 메인 콘텐츠 확인을 방해하는 흐름을 점검했습니다.' },
      { label: '신상품 구매 흐름', description: '메인 배너의 낮은 주목도와 상품 탐색 진입점 부족을 확인했습니다.' },
    ],
    keyQuestion: '기존 고객의 빠른 주문조회는 유지하면서 메인페이지가 상품 탐색과 상담을 시작하는 화면이 되게 하려면 어떻게 해야 할까?',
    decisions: [
      {
        number: '01',
        title: '메인 배너의 정보 우선순위 강화',
        evidence: '기존 메인 배너는 화면에서 차지하는 비중과 주목도가 낮아 신상품 탐색으로 이어지기 어려웠습니다.',
        decision: '메인 배너 비율을 확대하고 첫 화면에서 핵심 상품과 프로모션이 먼저 보이도록 했습니다.',
        specification: '배너 크기, 노출 순서, 카피 길이, 연결 페이지, 사용자 상태별 진입 기준을 재정의했습니다.',
        effect: '사용자가 팝업보다 메인 콘텐츠를 먼저 인지할 수 있는 구조를 만들었습니다.',
      },
      {
        number: '02',
        title: '메인 팝업의 역할 축소',
        evidence: '중앙 팝업과 DIMMED 효과 때문에 사용자는 진입하자마자 팝업을 닫아야 메인 콘텐츠를 볼 수 있었습니다.',
        decision: '팝업을 좌측으로 이동하고 메인 배너와 동시에 확인할 수 있도록 변경했습니다.',
        specification: '팝업 위치, 크기, DIMMED 제거, 닫기 동작과 노출 기준을 정리했습니다.',
        effect: '초기 진입 방해를 줄이면서 공지 기능은 유지했습니다.',
      },
      {
        number: '03',
        title: '상담 진입점을 고정된 도구로 분리',
        evidence: '기존 팝업 안의 고객센터 안내가 사라지면 기존 고객의 빠른 문의 경로도 함께 사라질 수 있었습니다.',
        decision: '우측 하단에 고객센터와 실시간 상담 버튼을 고정했습니다.',
        specification: 'Sticky 버튼의 위치, 상태, 연결 채널, 겹침 방지 기준을 정의했습니다.',
        effect: '팝업 역할은 줄이면서 상담 접근성은 유지하고 강화했습니다.',
      },
      {
        number: '04',
        title: '브랜드 컬러와 시각 체계 통일',
        evidence: '메인페이지의 배너와 콘텐츠가 서로 다른 시각 언어를 사용해 브랜드 인지가 약했습니다.',
        decision: '디자이너와 자사 브랜드 컬러 및 서브 컬러를 메인페이지 전반에 적용했습니다.',
        specification: '배너, 버튼, 강조색, 상담 도구의 색상 역할을 통일했습니다.',
        effect: '상품 콘텐츠와 서비스 기능이 하나의 브랜드 경험으로 보이도록 정리했습니다.',
      },
    ],
    artifacts: [],
    collaboration: [
      'GA4 데이터를 바탕으로 페이지 순위와 평균 참여시간을 비교했습니다.',
      '디자이너와 배너, 팝업, 브랜드 컬러의 시각 우선순위를 조율했습니다.',
      '운영팀과 고객센터 및 실시간 상담 진입 경로를 검토했습니다.',
    ],
    outcomes: project('printbank-main').impact,
    learnings: [
      '기존 고객의 익숙한 목적을 제거하지 않고 새로운 탐색 목적과 함께 배치해야 합니다.',
      '팝업의 정보 가치와 콘텐츠 접근을 방해하는 비용을 함께 비교해야 합니다.',
      '참여시간은 페이지 순위와 탐색 구조 변화 등 다른 지표와 함께 해석해야 합니다.',
    ],
    images: [],
    previousProject: 'printbank-npb',
    nextProject: 'magic-ecole',
  },
  {
    slug: 'magic-ecole',
    overview: '권한과 콘텐츠 구조의 혼선 때문에 새로운 역할이나 강의가 추가될 때마다 운영자 테스트와 추가 개발 요청이 반복됐습니다.',
    context: '운영자 테스트와 요구사항을 바탕으로 전역 권한과 강의 내부 권한을 분리하고, 콘텐츠 재사용 구조와 BO 설정 기준을 함께 설계했습니다.',
    problemFlow: ['권한·콘텐츠 구조 혼선', '운영자 테스트와 요구사항 확인', '권한 체계 판단', 'FO·BO 설계', '운영 효율 개선'],
    executiveSummary: {
      problem: '새로운 역할, 강의, 콘텐츠 운영 방식이 추가될 때마다 개발 요청이 반복됐습니다.',
      decision: '전역 권한과 강의 내부 권한을 분리하고 Custom Role, 콘텐츠 라이브러리, 운영자 설정 구조를 설계했습니다.',
      outcome: '14개 Sprint를 운영하고 기획팀 업무 수행률을 90%까지 높였으며 NIPA 유망 SaaS 지원 사업 통과에 기여했습니다.',
    },
    evidence: [
      { label: '운영자 인터뷰', description: '역할 추가, 권한 변경, 콘텐츠 복제 과정에서 반복되는 업무를 확인했습니다.' },
      { label: '기존 정책 분석', description: '전역 권한과 강의 내부 행동 권한이 얽혀 있는 구조를 분석했습니다.' },
      { label: '업무 흐름 분석', description: '강의 생성부터 콘텐츠 재사용까지의 단계를 비교했습니다.' },
      { label: 'Sprint 회고', description: '기획 준비 상태와 개발 착수 지연 원인을 점검했습니다.' },
    ],
    decisionCriteria: ['전역 정책과 강의별 정책을 분리할 수 있는가', '운영자가 설정으로 대응할 수 있는가', '콘텐츠 재사용을 막는 선행 구조인가'],
    keyQuestion: '새로운 역할과 강의가 추가되어도 매번 개발하지 않아도 되는 LMS 구조를 어떻게 만들 수 있을까?',
    decisions: [
      {
        number: '01',
        title: '전역 권한과 강의 내부 권한 분리',
        evidence: '역할 이름과 실제 접근 범위가 일치하지 않아 권한 변경의 영향 범위를 알기 어려웠습니다.',
        decision: '서비스 전체 권한과 강의 안에서의 행동 권한을 분리했습니다.',
        specification: '전역 역할과 Teacher, Student, Custom Role을 별도 정책으로 관리하고 권한 변경의 영향 범위를 구분했습니다.',
        effect: '새로운 강의 역할이 추가되어도 전역 권한 구조를 바꾸지 않도록 했습니다.',
      },
      {
        number: '02',
        title: 'Custom Role 권한 체크리스트 설계',
        evidence: '새 역할이 필요할 때마다 개발 요청이 발생했습니다.',
        decision: '운영자가 행동 권한을 조합해 역할을 만들도록 설계했습니다.',
        specification: '권한 체크리스트, 기본값, 변경 이력, 안전장치, 운영자 설정 권한을 정의했습니다.',
        effect: '운영 요구에 대응할 수 있는 제품 확장성을 높였습니다.',
      },
      {
        number: '03',
        title: '콘텐츠 계층과 라이브러리 통합',
        evidence: '비슷한 강의가 기수마다 반복 생성되어 콘텐츠 관리 비용이 커졌습니다.',
        decision: '프로젝트, 섹션, 액티비티의 계층을 통일하고 콘텐츠를 재사용하도록 했습니다.',
        specification: '교사와 학생 화면의 계층을 맞추고 운영자가 라이브러리에서 기존 콘텐츠를 불러오도록 설계했습니다.',
        effect: '강의 제작 과정의 반복 작업을 줄였습니다.',
      },
      {
        number: '04',
        title: '개발 착수 기준과 Jira 협업 규칙 정립',
        evidence: '준비되지 않은 업무가 Sprint에 포함되며 일정 예측이 어려웠습니다.',
        decision: '개발 착수 전에 필요한 기획 준비 상태를 명시했습니다.',
        specification: '백로그, 화면정의, 정책, 예외, QA 기준을 착수 조건으로 확인했습니다.',
        effect: '회의보다 준비 상태를 중심으로 협업할 수 있게 됐습니다.',
      },
    ],
    artifacts: [],
    executionFlow: ['요구사항 확인', '권한 정책 분리', '콘텐츠 구조 설계', 'FO·BO 화면정의', 'Sprint 관리'],
    collaboration: [
      '운영자와 교육기관 관리자의 요구를 역할별로 분리했습니다.',
      '개발자와 권한 데이터 구조 및 기본값을 합의했습니다.',
      'Jira와 데일리 미팅으로 14개 Sprint를 관리했습니다.',
    ],
    outcomes: project('magic-ecole').impact,
    learnings: [
      '권한은 역할 이름보다 데이터 접근 범위와 행동 권한을 기준으로 설계해야 합니다.',
      '자유로운 설정 기능에는 기본값과 안전장치가 함께 필요합니다.',
      'Scrum은 회의 방식이 아니라 개발 착수 기준을 명확하게 만드는 도구여야 합니다.',
    ],
    images: [],
    previousProject: 'printbank-main',
    nextProject: 'tax-canvas',
  },
  {
    slug: 'tax-canvas',
    overview: 'AI 결과에 대한 신뢰 부족을 세무사의 실제 검토 순서와 근거 확인 방식의 문제로 정의했습니다.',
    context: '세무사 인터뷰를 통해 긴 분석 시간, 복수 쟁점 비교, 결과 신뢰성 문제를 확인하고 근거 제시와 재검토 흐름을 우선 기능으로 설계했습니다.',
    problemFlow: ['AI 결과 신뢰 부족', '세무사 인터뷰', '근거 제시 기능 판단', '기능 설계', '사용자 평가 준비'],
    executiveSummary: {
      problem: 'AI 결과가 늦고 여러 쟁점을 비교하거나 근거를 즉시 검토하기 어려웠습니다.',
      decision: 'AI 상태, 복수 쟁점, 재분석, 판례와 예규 근거 확인을 하나의 검토 흐름으로 설계했습니다.',
      outcome: 'v1.1 요구사항을 개발 착수 가능한 수준으로 완성하고 RAG 검색 결과와 생성 답변의 연결 구조를 정의했습니다.',
    },
    evidence: [
      { label: '세무사 인터뷰', description: 'AI 결과를 신뢰하기 어려운 이유와 실제 검토 순서를 확인했습니다.' },
      { label: '기존 흐름 분석', description: '긴 대기와 복수 쟁점 전환에서 이탈이 발생하는 지점을 찾았습니다.' },
      { label: 'RAG 구조 협의', description: '검색 결과와 생성 답변의 관계 및 필요한 메타데이터를 정의했습니다.' },
      { label: '사용자 시나리오', description: '실패, 재시도, 쟁점 이동, 결과 비교까지 포함했습니다.' },
    ],
    decisionCriteria: ['세무사의 판단 순서를 방해하지 않는가', 'AI 답변의 근거를 직접 확인할 수 있는가', '실패와 재분석 상태를 투명하게 보여주는가'],
    keyQuestion: '사용자가 AI 답변을 그대로 믿지 않고 빠르게 검토하고 판단하게 하려면 무엇이 필요할까?',
    decisions: [
      {
        number: '01',
        title: 'AI 분석 단계와 부분 결과 제공',
        evidence: '긴 대기 동안 진행 상태와 실패 여부를 알 수 없었습니다.',
        decision: '분석 단계를 보여주고 확인 가능한 결과부터 순차적으로 제공했습니다.',
        specification: '대기, 진행, 부분 완료, 완료, 실패, 재시도 상태를 정의했습니다.',
        effect: 'AI 처리 시간을 검토 가능한 과정으로 바꿨습니다.',
      },
      {
        number: '02',
        title: '복수 쟁점 간 빠른 이동',
        evidence: '하나의 사실관계에서 여러 쟁점을 비교해야 했습니다.',
        decision: '쟁점을 추가하고 빠르게 이동하며 이전 결과를 유지하도록 했습니다.',
        specification: '쟁점 목록, 현재 위치, 재분석 잠금, 이전 결과 표시 기준을 정의했습니다.',
        effect: '분석 맥락을 잃지 않고 결과를 비교할 수 있게 했습니다.',
      },
      {
        number: '03',
        title: '판례와 예규의 근거 메타데이터 제공',
        evidence: '전문가는 결론보다 출처 유형과 날짜를 먼저 확인했습니다.',
        decision: '근거 문서를 답변과 함께 탐색할 수 있도록 연결했습니다.',
        specification: '문서 유형, 제목, 날짜, 링크, 답변 문장과의 연결 관계를 정의했습니다.',
        effect: '사용자가 AI 답변을 독립적으로 검증할 수 있게 했습니다.',
      },
    ],
    artifacts: [],
    executionFlow: ['인터뷰 정리', '검토 시나리오 정의', 'AI 상태 UX 설계', 'RAG 근거 구조 협의', '요구사항 정리'],
    collaboration: [
      '세무사 인터뷰로 판단 기준과 근거 확인 순서를 정리했습니다.',
      '개발자와 RAG 검색 결과 및 생성 답변의 연결 구조를 합의했습니다.',
      'Jira에 요구사항, 예외, 개발 상태를 정리했습니다.',
    ],
    outcomes: project('tax-canvas').impact,
    learnings: [
      'AI 제품은 결과 화면보다 대기, 실패, 재시도, 근거 확인 흐름이 신뢰를 결정합니다.',
      '생성 결과와 검색 근거의 관계를 사용자에게 명확히 설명해야 합니다.',
      '개발 착수 상태와 실제 사용자 성과는 구분해 표현해야 합니다.',
    ],
    images: [],
    previousProject: 'magic-ecole',
    nextProject: 'print-studio',
  },
  {
    slug: 'print-studio',
    overview: '명함 주문 과정에서 작업 파일 오류로 CS가 반복되고 주문 정보를 내부 시스템으로 옮기는 업무가 수작업으로 진행됐습니다.',
    context: '사용자가 파일을 업로드하는 시점에 상품별 가이드를 제공하고 Cafe24 주문과 내부 인트라넷을 연결했습니다.',
    executiveSummary: {
      problem: '작업 파일 오류와 주문 정보의 반복 입력이 사용자와 운영자 모두의 시간을 소모했습니다.',
      decision: '오류 직전의 업로드 단계에서 가이드를 제공하고 주문, 파일, 배송 정보를 연결했습니다.',
      outcome: '신규 서비스를 출시하고 파일 가이드 이용률 50% 이상, 운영 처리시간 30% 단축을 확인했습니다.',
    },
    evidence: [
      { label: 'CS 문의 분석', description: '반복되는 파일 오류 유형과 질문 시점을 분류했습니다.' },
      { label: '주문 흐름 분석', description: 'Cafe24와 내부 시스템 사이의 수작업 구간을 확인했습니다.' },
      { label: '운영자 인터뷰', description: '접수, 파일 검수, 공장 입력 과정의 반복 업무를 점검했습니다.' },
      { label: '출시 후 이용률', description: '파일 가이드 이용과 운영 처리시간 변화를 확인했습니다.' },
    ],
    keyQuestion: '사용자가 주문을 완료하기 전에 스스로 제작 가능한 파일인지 확인하게 하려면 어떻게 해야 할까?',
    decisions: [
      {
        number: '01',
        title: '업로드 시점에 상품별 작업 가이드 제공',
        evidence: '파일 오류는 주문 완료 후 발견되어 CS와 재작업으로 이어졌습니다.',
        decision: '오류 가능성이 높은 업로드 시점에 상품별 가이드를 배치했습니다.',
        specification: '상품과 규격별 가이드, 확인 CTA, 대표 오류 예시를 정의했습니다.',
        effect: '사용자가 주문 전에 파일 제작 기준을 확인할 수 있게 됐습니다.',
      },
      {
        number: '02',
        title: '운영자가 교체 가능한 가이드 구조',
        evidence: '안내가 바뀔 때마다 개발 배포에 의존하면 유지보수가 느려졌습니다.',
        decision: '운영자가 최신 가이드를 직접 교체할 수 있게 했습니다.',
        specification: '상품별 링크, 파일명 규칙, 교체 권한, 대체 안내를 정의했습니다.',
        effect: '콘텐츠 변경과 개발 배포를 분리했습니다.',
      },
      {
        number: '03',
        title: 'Cafe24 주문과 인트라넷 데이터 연결',
        evidence: '운영자가 주문 정보를 내부 시스템에 반복 입력했습니다.',
        decision: '주문 CSV와 내부 업무 필드를 매핑하고 파일 및 배송 흐름을 연결했습니다.',
        specification: '주문번호, 상품, 옵션, 파일, 배송 항목의 기준을 정의했습니다.',
        effect: '운영 처리시간을 30% 단축했습니다.',
      },
    ],
    artifacts: [
      asset('artifact', 'public/images/projects/print-studio/02-file-guide.png', '파일 가이드 화면', '상품별 파일 가이드를 주문 흐름 안에서 확인하는 화면'),
    ],
    collaboration: [
      '디자이너와 반응형 화면 및 UX Writing을 조율했습니다.',
      '개발자와 플랫폼 제약 및 데이터 매핑 조건을 합의했습니다.',
      '운영자와 접수, 검수, 배송 흐름을 검증했습니다.',
    ],
    outcomes: project('print-studio').impact,
    learnings: [
      '안내는 오류 발생 이후보다 오류 직전의 맥락에서 제공해야 효과적입니다.',
      '운영 자동화는 화면뿐 아니라 외부 플랫폼과 내부 데이터의 연결 조건까지 설계해야 합니다.',
      '전문 용어를 줄이는 것보다 사용자가 수행해야 할 행동을 명확히 설명하는 것이 중요합니다.',
    ],
    images: [],
    previousProject: 'tax-canvas',
    nextProject: 'print-decision-support',
  },
  {
    slug: 'print-decision-support',
    overview: '인쇄 상품은 용도, 예산, 일정, 인쇄 방식, 종이, 후가공 등 여러 조건을 동시에 비교해야 합니다.',
    context: '고객과 운영자 인터뷰를 통해 상담 이후에도 구매 결정을 내리지 못하는 원인을 분석하고 경험적 추천을 구조화된 의사결정 지원 체계로 전환했습니다.',
    executiveSummary: {
      problem: '상담 이후 이탈은 정보 부족보다 고객 맥락과 상품 체계 사이의 구조적 간극에서 발생했습니다.',
      decision: '사용 목적, 예산, 일정, 기대 결과를 입력받고 추천 옵션, 근거, 주의사항을 함께 제공하는 구조를 제안했습니다.',
      outcome: '서비스 콘셉트를 도출하고 2026 한국서비스디자인학회 춘계 학술대회에서 발표했습니다.',
    },
    evidence: [
      { label: '고객 인터뷰', description: '상담 후에도 구매 결정을 내리지 못하는 이유를 확인했습니다.' },
      { label: '운영자 인터뷰', description: '운영자의 추천 기준과 반복 판단을 수집했습니다.' },
      { label: 'Affinity Mapping', description: '고객 조건과 상품 선택 기준을 그룹화했습니다.' },
      { label: 'Journey Map', description: '상담 전후의 정보 공백과 이탈 지점을 정리했습니다.' },
    ],
    keyQuestion: '운영자의 경험적 추천을 어떻게 일관된 의사결정 지원 체계로 전환할 수 있을까?',
    decisions: [
      {
        number: '01',
        title: '고객 문제를 선택 기준의 부재로 재정의',
        evidence: '고객은 정보가 있어도 자신의 용도에 맞는 선택 기준을 세우기 어려웠습니다.',
        decision: '정보 부족이 아니라 선택 기준 부재를 핵심 문제로 정의했습니다.',
        specification: '사용 목적, 예산, 일정, 기대 결과를 중심으로 입력 구조를 만들었습니다.',
        effect: '상담 질문을 제품 입력 조건으로 전환했습니다.',
      },
      {
        number: '02',
        title: '추천 옵션과 근거를 함께 제공',
        evidence: '운영자는 경험적으로 추천 이유와 주의사항을 함께 설명했습니다.',
        decision: '추천 결과, 추천 근거, 주의사항을 함께 보여주도록 했습니다.',
        specification: '추천 카드, 근거 문장, 대안 옵션, 주의사항 영역을 정의했습니다.',
        effect: '고객은 결과를 이해하고 운영자는 상담을 이어갈 수 있게 됐습니다.',
      },
      {
        number: '03',
        title: 'Human-in-the-loop 구조',
        evidence: '복잡한 인쇄 조건은 자동 추천만으로 책임지기 어려웠습니다.',
        decision: '운영자가 최종 판단을 조정하고 기록하는 구조로 설계했습니다.',
        specification: '추천 결과 편집, 상담 메모, 최종 확인 흐름을 포함했습니다.',
        effect: '자동화보다 현실적인 반복 판단 지원 체계를 만들었습니다.',
      },
    ],
    artifacts: [
      asset('artifact', 'public/images/projects/print-decision-support/02-affinity-map.png', 'Affinity Map', '고객과 운영자 인터뷰를 바탕으로 선택 기준을 묶은 리서치 산출물', '2:1'),
    ],
    collaboration: [
      '고객과 운영자를 분리해 인터뷰하고 문제를 비교했습니다.',
      '지도교수와 연구 피드백을 반영해 서비스 콘셉트를 정리했습니다.',
      '학술대회 발표를 위해 연구 흐름과 시각 산출물을 정돈했습니다.',
    ],
    outcomes: project('print-decision-support').impact,
    learnings: [
      '복잡한 상품에서는 정보를 더 주기보다 선택 기준을 만들어 주는 것이 중요합니다.',
      '추천 기능은 결과뿐 아니라 이유와 책임 범위를 함께 설계해야 합니다.',
      '운영자의 판단을 제거하기보다 반복 판단을 지원하는 방식이 현실적입니다.',
    ],
    images: [],
    previousProject: 'print-studio',
    nextProject: 'gachon-metaverse-campus',
  },
  {
    slug: 'gachon-metaverse-campus',
    overview: '메타버스 캠퍼스 사용자는 넓은 공간에서 목적지를 찾기 어려웠고 방문 후 반복적으로 참여할 콘텐츠도 부족했습니다.',
    context: '이동 경험을 개선하고 학교 고유 IP를 활용한 레이싱 콘텐츠와 참여 행사를 기획하고 운영했습니다.',
    executiveSummary: {
      problem: '사용자는 캠퍼스에서 길을 잃고 다시 방문할 이유를 찾기 어려웠습니다.',
      decision: '포털, 홈 버튼, 차량 호출, 시각적 랜드마크로 이동을 개선하고 학교 IP 기반 게임 콘텐츠를 만들었습니다.',
      outcome: '2시간 행사에 100명이 참여했고 사용자 만족도 4.5점을 기록했습니다.',
    },
    evidence: [
      { label: '사용자 피드백', description: '목적지 탐색과 콘텐츠 부족 문제를 수집했습니다.' },
      { label: '공간 구조 분석', description: '이동 동선과 랜드마크가 부족한 구간을 확인했습니다.' },
      { label: '행사 운영 기록', description: '짧은 시간 안에 참여를 유도하는 요소를 점검했습니다.' },
    ],
    keyQuestion: '사용자가 길을 잃지 않고 캠퍼스 방문 목적과 콘텐츠를 빠르게 찾게 하려면 무엇이 필요할까?',
    decisions: [
      {
        number: '01',
        title: '포털과 차량 호출 기반 길찾기 개선',
        evidence: '넓은 가상 공간에서 목적지를 찾기 어려웠습니다.',
        decision: '포털, 홈 버튼, 차량 호출을 이동 보조 장치로 배치했습니다.',
        specification: '주요 목적지 연결, 복귀 경로, 호출 위치를 정의했습니다.',
        effect: '탐색 부담을 줄이고 이동 목적을 명확하게 했습니다.',
      },
      {
        number: '02',
        title: '학교 IP 기반 레이싱 콘텐츠',
        evidence: '방문 이후 반복 참여할 콘텐츠가 부족했습니다.',
        decision: '학교 고유 IP를 활용한 게임형 경험을 설계했습니다.',
        specification: '스토리, 맵, 참여 보상, 행사 운영 흐름을 구성했습니다.',
        effect: '짧은 행사 시간 안에 참여와 공유를 유도했습니다.',
      },
      {
        number: '03',
        title: '8명 팀 역할과 운영 기준 정립',
        evidence: '공간, 콘텐츠, 홍보, 행사 운영이 동시에 필요했습니다.',
        decision: '역할과 일정, 행사 운영 기준을 분리했습니다.',
        specification: '콘텐츠 제작, 테스트, 홍보, 현장 대응 담당을 나눴습니다.',
        effect: '리뉴얼과 행사 운영을 함께 완료했습니다.',
      },
    ],
    artifacts: [
      asset('artifact', 'public/images/projects/gachon-metaverse-campus/03-navigation-features.png', '캠퍼스 이동 기능', '포털과 이동 버튼으로 목적지 탐색을 돕는 내비게이션 개선 화면'),
      asset('product', 'public/images/projects/gachon-metaverse-campus/04-racing-content.png', '레이싱 콘텐츠', '방문 이후 반복 참여를 유도한 게임형 콘텐츠 화면'),
    ],
    collaboration: [
      '8명 팀의 역할과 일정, 콘텐츠 제작 범위를 조율했습니다.',
      '사용자 피드백을 바탕으로 이동 경험과 랜드마크를 개선했습니다.',
      '팝업 행사 홍보와 운영 흐름을 함께 설계했습니다.',
    ],
    outcomes: project('gachon-metaverse-campus').impact,
    learnings: [
      '가상 공간에서도 목적지와 복귀 경로는 실제 공간만큼 중요합니다.',
      '콘텐츠는 공간 방문 목적과 연결될 때 반복 참여를 만들 수 있습니다.',
      '짧은 행사에서는 스토리와 즉시 보상이 참여 장벽을 낮춥니다.',
    ],
    images: [],
    previousProject: 'print-decision-support',
  },
];

const makeProjectDetail = (slug: string): ProjectDetail | undefined => {
  const current = projects.find((item) => item.slug === slug);
  if (!current) return undefined;
  const index = projects.findIndex((item) => item.slug === slug);
  const evidence = [
    { label: '문제 정의', description: current.problem },
    { label: '제품 판단', description: current.decision },
    { label: '역할과 범위', description: `${current.role}로서 ${current.contribution}을 수행했습니다.` },
  ];

  return {
    slug: current.slug,
    overview: current.description ?? current.tagline,
    context: `${current.problem} 이를 해결하기 위해 프로젝트의 범위를 정하고 실행 가능한 제품 기준으로 구체화했습니다.`,
    executiveSummary: {
      problem: current.problem,
      decision: current.decision,
      outcome: current.impact.map((item) => `${item.value} ${item.label}`).join(', '),
    },
    evidence,
    keyQuestion: `${current.problem.replace(/[.!?]$/, '')} 문제를 어떤 제품 구조와 실행 기준으로 해결할 수 있을까?`,
    decisions: [
      {
        number: '01',
        title: '문제를 실행 가능한 범위로 구조화',
        evidence: current.problem,
        decision: current.decision,
        specification: `${current.contribution}을 중심으로 요구사항과 결과물을 정리했습니다.`,
        effect: current.impact[0]?.description ?? '프로젝트의 핵심 결과물을 완성했습니다.',
      },
      {
        number: '02',
        title: '결과를 검증 가능한 산출물로 연결',
        evidence: `프로젝트 상태와 성공 기준을 ${current.status} 단계에 맞춰 구분할 필요가 있었습니다.`,
        decision: '실제 산출물, 측정 결과, 외부 선정, 시뮬레이션을 구분해 결과를 기록했습니다.',
        specification: `${current.tools.join(' · ')}을 활용해 기획과 검증 과정을 연결했습니다.`,
        effect: current.impact.map((item) => item.label).join(', '),
      },
    ],
    artifacts: [],
    collaboration: [
      `${current.role} 역할로 프로젝트의 문제와 범위를 정리했습니다.`,
      `${current.contribution}을 기준으로 협업 결과물을 만들었습니다.`,
      `${current.tools.join(', ')}을 활용해 실행과 검증 과정을 관리했습니다.`,
    ],
    outcomes: current.impact,
    learnings: [
      '문제의 크기보다 사용자가 실제로 막히는 순간과 원인을 먼저 확인해야 합니다.',
      '결과는 실제 측정, 산출물, 외부 인정, 예측값을 구분해 전달해야 합니다.',
      '다음 단계에서는 더 많은 사용자 데이터와 반복 검증으로 판단의 정확도를 높일 수 있습니다.',
    ],
    images: [],
    previousProject: projects[index - 1]?.slug,
    nextProject: projects[index + 1]?.slug,
  };
};

export const findProjectDetail = (slug?: string) => {
  if (!slug) return undefined;
  const index = projects.findIndex((item) => item.slug === slug);
  const detail = projectDetails.find((item) => item.slug === slug) ?? makeProjectDetail(slug);
  if (!detail) return undefined;

  return {
    ...detail,
    previousProject: projects[index - 1]?.slug,
    nextProject: projects[index + 1]?.slug,
  };
};
