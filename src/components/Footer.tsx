import { ArrowUpRight, BriefcaseBusiness, Mail, UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer({ email }: { email: string }) {
  return (
    <footer className="site-footer">
      <div className="footer-copy">
        <p className="eyebrow">Let’s work together</p>
        <h2>사용자 상태와 운영 정책을 함께 읽는 서비스 기획자가 되겠습니다.</h2>
        <p>서비스 기획자 김부경입니다. 위버스컴퍼니에서 더 넓은 팬 경험을 만들고 싶습니다.</p>
      </div>
      <div className="footer-actions" aria-label="연락처 및 외부 링크">
        <Link className="footer-action footer-action--primary" to="/contact">
          <span className="footer-action__label"><Mail size={18} /> <span>연락하기</span></span>
          <strong>{email}</strong>
          <ArrowUpRight className="footer-action__arrow" size={18} />
        </Link>
        <div className="footer-action-row">
          <Link className="footer-action" to="/about"><UserRound size={17} /> About</Link>
          <Link className="footer-action" to="/work"><BriefcaseBusiness size={17} /> Work</Link>
        </div>
      </div>
      <div className="footer-meta">
        <span>Kim Bugyeong · Product Manager Portfolio</span>
        <span>Last updated: 2026</span>
      </div>
    </footer>
  );
}
