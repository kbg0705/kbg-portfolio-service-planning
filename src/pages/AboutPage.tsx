import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { careerSummary } from '../data/career';
import { profile } from '../data/profile';

const competencies = [
  '데이터·VOC·인터뷰 기반 문제 발견',
  '정책·상태·예외 케이스를 포함한 요구사항 설계',
  'FO/BO 기획, 개발 협업, QA와 출시 검증',
];

const howIWork = [
  '사용자와 운영자가 멈추는 지점을 먼저 확인합니다.',
  '정책과 예외 케이스를 개발 가능한 언어로 정리합니다.',
  '출시 이후 지표와 반응을 보고 다음 개선 방향을 정합니다.',
];

const fitPoints = [
  '인쇄 이커머스에서 제작·주문 흐름의 막힘을 데이터와 VOC로 발견했습니다.',
  '복잡한 권한, 상태, 운영 조건을 FO/BO 요구사항으로 구조화했습니다.',
  '화면정의, QA, 지표 확인까지 제품 실행의 끝단을 놓치지 않았습니다.',
];

export function AboutPage() {
  return <><Header /><main className="page-shell about-page"><header className="page-hero"><p className="eyebrow">About</p><h1>복잡한 운영 문제를 사용자가 이해할 수 있는 제품 구조로 바꿉니다.</h1><div className="profile-panel">{profile.profile.map((item) => <p key={item}>{item}</p>)}</div></header><section className="about-detail-grid"><article><p className="eyebrow">Core Strength</p><h2>핵심 역량</h2><ul>{competencies.map((item) => <li key={item}>{item}</li>)}</ul></article><article><p className="eyebrow">Career</p><h2>경력 및 경험 요약</h2><ol className="about-career-list">{careerSummary.map((entry) => <li key={`${entry.company}-${entry.period}`}><strong>{entry.company}</strong><span>{entry.role}</span><em>{entry.period}</em><p>{entry.summary}</p></li>)}</ol></article></section><section className="about-detail-grid"><article><p className="eyebrow">How I Work</p><h2>일하는 방식</h2><ul>{howIWork.map((item) => <li key={item}>{item}</li>)}</ul></article><article><p className="eyebrow">Tools</p><h2>사용 도구와 업무 방식</h2><div className="tag-list">{profile.tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}</div></article></section><section className="about-section about-fit"><div><p className="eyebrow">Miricanvas Junior PM Fit</p><h2>미리캔버스 Junior PM과의 적합성</h2></div><ul>{fitPoints.map((item) => <li key={item}>{item}</li>)}</ul></section><section className="about-detail-grid about-credentials"><article><p className="eyebrow">Education</p><h2>학력</h2><ul>{profile.education.map((item) => <li key={item}>{item}</li>)}</ul></article><article><p className="eyebrow">Certifications</p><h2>자격</h2><ul>{profile.certifications.map((item) => <li key={item}>{item}</li>)}</ul></article></section></main><Footer email={profile.email} /></>;
}
