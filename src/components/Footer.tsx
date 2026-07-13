import { ArrowUpRight, BriefcaseBusiness, Mail, UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer({ email }: { email: string }) {
  return (
    <footer className="site-footer">
      <div className="footer-copy">
        <p className="eyebrow">함께 일하기</p>
        <h2>
          사용자 흐름과 운영 정책을
          <br />
          함께 설계합니다.
        </h2>
        <p>서비스 기획자 김부경입니다.</p>
        <p className="footer-built">김부경이 기획하고 Codex로 구현·개선했습니다.</p>
      </div>
      <div className="footer-actions" aria-label="연락처 및 외부 링크">
        <Link className="footer-action footer-action--primary" to="/contact">
          <span className="footer-action__label"><Mail size={18} /> <span>연락하기</span></span>
          <strong>{email}</strong>
          <ArrowUpRight className="footer-action__arrow" size={18} />
        </Link>
        <div className="footer-action-row">
          <Link className="footer-action" to="/about"><UserRound size={17} /> 소개</Link>
          <Link className="footer-action" to="/work"><BriefcaseBusiness size={17} /> 프로젝트</Link>
        </div>
      </div>
      <div className="footer-meta">
        <span>김부경 · 서비스 기획 포트폴리오</span>
        <span>2026 업데이트</span>
      </div>
    </footer>
  );
}
