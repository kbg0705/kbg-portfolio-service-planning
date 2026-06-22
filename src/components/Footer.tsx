import { ArrowUpRight, Download, Github, Mail } from 'lucide-react';

type FooterProps = {
  email: string;
};

export function Footer({ email }: FooterProps) {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-copy">
        <p className="eyebrow">Let’s work together</p>
        <h2>사용자의 막힘을 제품의 기회로 바꾸겠습니다.</h2>
        <p>주니어 프로덕트 매니저 김부경입니다. 함께 이야기할 기회를 기다리겠습니다.</p>
      </div>

      <div className="footer-actions" aria-label="연락처 및 외부 링크">
        <a className="footer-action footer-action--primary" href={`mailto:${email}`}>
          <span>
            <Mail size={18} aria-hidden="true" />
            이메일 보내기
          </span>
          <strong>{email}</strong>
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>

        <div className="footer-action-row">
          <a className="footer-action footer-action--secondary" href="/resume/김부경_이력서.pdf" download>
            <Download size={17} aria-hidden="true" />
            이력서 다운로드
          </a>
          <a
            className="footer-action footer-action--secondary"
            href="https://github.com/kbg0705"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={17} aria-hidden="true" />
            GitHub
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="footer-meta">
        <span>Kim Bugyeong · Product Manager Portfolio</span>
        <span>Last updated: 2026</span>
      </div>
    </footer>
  );
}
