import { Download } from 'lucide-react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { profile } from '../data/profile';

export function AboutPage() {
  const groups = [['경력 요약', profile.experience], ['교육', profile.education], ['자격', profile.certifications], ['관심 제품 영역', profile.interests], ['업무 도구', profile.tools]] as const;
  return <><Header /><main className="page-shell about-page"><header className="page-hero"><p className="eyebrow">About</p><h1>복잡한 운영 문제를 사용자가 이해할 수 있는 제품 구조로 바꿉니다.</h1><p>{profile.summary}</p><a className="primary-action" href={profile.resume} download>이력서 다운로드 <Download size={18} /></a></header><section className="about-principles"><div><p className="eyebrow">Problem Solving</p><h2>PM으로서의 문제 해결 방식</h2></div><ol>{profile.principles.map((item) => <li key={item}>{item}</li>)}</ol></section><section className="about-grid">{groups.map(([title, items]) => <article key={title}><h2>{title}</h2><div className="tag-list">{items.map((item) => <span className="tag" key={item}>{item}</span>)}</div></article>)}</section></main><Footer email={profile.email} /></>;
}
