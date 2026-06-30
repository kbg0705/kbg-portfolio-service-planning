# 김부경 Product Manager Portfolio for Weverse Company

위버스컴퍼니 서비스 기획 직무 지원을 위한 PC 전용 포트폴리오입니다. React, TypeScript, Vite 기반이며 GitHub Pages 배포를 기준으로 구성했습니다.

## Routes

- `/`
- `/work`
- `/about`
- `/projects/:slug`

GitHub Pages 직접 URL 접근은 `public/404.html`이 `?redirect=` 방식으로 SPA 라우터에 돌려보냅니다.

## 콘텐츠 구조

- `src/data/projects.ts`: Featured, Compact 프로젝트 목록과 위버스 지원용 대표 프로젝트 순서
- `src/data/projectDetails.ts`: 상세페이지 공통 템플릿에 들어가는 프로젝트별 근거, 결정, 산출물, 성과, 회고
- `src/data/career.ts`: Home의 Career Summary에 표시되는 회사, 역할, 연결 프로젝트
- `src/data/projectCategories.ts`: `/work` 필터
- `src/data/profile.ts`: About, Footer, 연락처, 학력, 자격, 활동, 업무 도구
- `docs/asset-manifest.md`: 필요한 이미지와 보안 처리 상태

## 로컬 실행 및 검증

```bash
pnpm install
pnpm run lint
pnpm run typecheck
pnpm run build
```

이 저장소는 pnpm을 기준으로 합니다. npm이 설치된 환경에서는 동일한 script 이름으로 실행할 수 있습니다.

## SEO Note

기본 메타데이터는 `index.html`에 제공했습니다. SPA 구조상 정적 HTML이 프로젝트별로 생성되지는 않으므로, 프로젝트 상세 진입 후 브라우저 문서 title과 description만 런타임에서 갱신합니다. 완전한 프로젝트별 Open Graph가 필요하면 SSG 또는 사전 렌더링 전환이 필요합니다.

## 배포 주소

```text
https://kbg0705.github.io/kbg-portfolio-weverse/
```
