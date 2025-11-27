# Idea Funding

꿈을 현실로 만드는 크라우드펀딩 플랫폼

## 📋 프로젝트 소개

Idea Funding은 창의적인 아이디어를 가진 창작자와 후원자를 연결하는 크라우드펀딩 플랫폼입니다. 사용자들은 다양한 프로젝트를 탐색하고, 관심 있는 프로젝트에 후원할 수 있으며, 커뮤니티를 통해 아이디어를 공유하고 소통할 수 있습니다.

### 🎯 프로젝트 목표
- 실제 사용 가능한 크라우드펀딩 플랫폼 구현
- React를 활용한 모던한 웹 애플리케이션 개발
- 컴포넌트 기반 아키텍처 설계 및 재사용 가능한 코드 작성

## 🚀 배포 링크

**라이브 데모**: [https://exile175r.github.io/idea-funding](https://exile175r.github.io/idea-funding)

## 🛠️ 기술 스택

### Frontend
- **React** 19.1.1 - 사용자 인터페이스 구축
- **React Router** 7.9.1 - 클라이언트 사이드 라우팅
- **Swiper** 12.0.1 - 이미지 슬라이더
- **CSS3** - 스타일링 및 반응형 디자인

### 개발 도구
- **Create React App** - 프로젝트 초기 설정
- **GitHub Pages** - 정적 사이트 배포
- **ESLint** - 코드 품질 관리

## ✨ 주요 기능

### 1. 프로젝트 관리
- 다양한 카테고리별 프로젝트 조회
- 실시간 검색 및 필터링 기능
- 프로젝트 상세 정보 확인

### 2. 후원 시스템
- 프로젝트 상세 정보 확인
- 후원 금액 선택 및 직접 입력
- 후원 진행률 시각화

### 3. 커뮤니티
- 아이디어 창고를 통한 사용자 간 소통
- 아이디어 공유 및 게시글 작성
- 카테고리별 필터링 및 검색

### 4. 사용자 인증
- 로그인 및 회원가입
- ID/비밀번호 찾기 기능
- 사용자 세션 관리

## 📁 프로젝트 구조

```
idea-funding/
├── public/                 # 정적 파일
│   ├── images/            # 이미지 리소스
│   ├── videos/            # 비디오 리소스
│   └── font/              # 폰트 파일
├── src/
│   ├── components/        # React 컴포넌트
│   │   ├── about/         # 프로젝트 소개 페이지
│   │   ├── auth/          # 인증 관련 컴포넌트
│   │   ├── community/     # 커뮤니티 컴포넌트
│   │   ├── footer/        # 푸터 컴포넌트
│   │   ├── funding/       # 후원 페이지
│   │   ├── header/        # 헤더 컴포넌트
│   │   ├── main/          # 메인 페이지
│   │   └── project/       # 프로젝트 목록 페이지
│   ├── hooks/             # 커스텀 훅
│   ├── App.js             # 메인 앱 컴포넌트
│   ├── index.js           # 진입점
│   ├── productData.js     # 프로젝트 데이터
│   └── communityData.js   # 커뮤니티 데이터
├── package.json
└── README.md
```

## 🚀 시작하기

### 사전 요구사항
- Node.js (v14 이상)
- npm 또는 yarn

### 설치

1. 저장소 클론
```bash
git clone https://github.com/exile175r/idea-funding.git
cd idea-funding
```

2. 의존성 설치
```bash
npm install
```

3. 개발 서버 실행
```bash
npm start
```

브라우저에서 [http://localhost:3000](http://localhost:3000)로 접속하여 확인할 수 있습니다.

### 빌드

프로덕션 빌드를 생성하려면:

```bash
npm run build
```

빌드된 파일은 `build` 폴더에 생성됩니다.

### 배포

GitHub Pages에 배포하려면:

```bash
npm run deploy
```

## 📝 사용 가능한 스크립트

- `npm start` - 개발 서버 실행
- `npm run build` - 프로덕션 빌드 생성
- `npm test` - 테스트 실행
- `npm run deploy` - GitHub Pages에 배포

## 🎓 배운 점

이 프로젝트를 통해 다음을 학습했습니다:

- React Hooks를 활용한 상태 관리 및 컴포넌트 최적화
- React Router를 이용한 클라이언트 사이드 라우팅 구현
- 컴포넌트 기반 아키텍처 설계 및 재사용 가능한 코드 작성
- 반응형 웹 디자인 및 사용자 경험 개선
- GitHub Pages를 활용한 정적 사이트 배포
- 환경별 라우팅 설정 (개발/프로덕션)

## 📅 개발 정보

- **개발 기간**: 2025년
- **개발 인원**: 1명 (개인 프로젝트)
- **배포 환경**: GitHub Pages

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 프로젝트입니다.

## 👤 개발자

- GitHub: [@exile175r](https://github.com/exile175r)

---

프로젝트에 대한 질문이나 제안사항이 있으시면 이슈를 등록해주세요!
