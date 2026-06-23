import { ArrowDownRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SignalDiagram } from './SignalDiagram';

export function Hero() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">PRODUCT MANAGER · UX STRATEGY · AI</p>
        <h1 id="hero-title">
          사용자의 막힘을 발견해
          <span>실행 가능한 제품으로 바꿉니다.</span>
        </h1>
        <p className="hero-description">
          인쇄 이커머스, EdTech SaaS, 생성형 AI 검색서비스에서 사용자 흐름과 운영 정책을
          설계하고 개발·디자인·운영 조직과 출시 및 개선을 수행했습니다.
        </p>
        <div className="hero-actions">
          <a className="primary-action" href="#work">
            프로젝트 살펴보기
            <ArrowDownRight size={18} aria-hidden="true" />
          </a>
          <Link className="secondary-action" to="/about#career-summary">
            경력 한눈에 보기
          </Link>
        </div>
        <p className="hero-keywords">EdTech SaaS · AI Search · E-commerce</p>
      </div>
      <SignalDiagram />
    </section>
  );
}
