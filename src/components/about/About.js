import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const techStack = [
    { name: 'React', version: '19.1.1', description: '사용자 인터페이스 구축' },
    { name: 'React Router', version: '7.9.1', description: '클라이언트 사이드 라우팅' },
    { name: 'Swiper', version: '12.0.1', description: '이미지 슬라이더' },
    { name: 'CSS3', description: '스타일링 및 반응형 디자인' },
  ];

  const features = [
    {
      title: '프로젝트 관리',
      description: '다양한 카테고리별 프로젝트 조회, 검색, 필터링 기능',
      icon: '📋'
    },
    {
      title: '후원 시스템',
      description: '프로젝트 상세 정보 확인 및 후원 금액 선택 기능',
      icon: '💰'
    },
    {
      title: '커뮤니티',
      description: '아이디어 창고를 통한 사용자 간 소통 및 아이디어 공유',
      icon: '💡'
    },
    {
      title: '사용자 인증',
      description: '로그인, 회원가입, ID/비밀번호 찾기 기능',
      icon: '🔐'
    },
  ];

  return (
    <main className="about-page">
      <div className="about-container">
        {/* 헤더 섹션 */}
        <section className="about-hero">
          <h1 className="about-title">Idea Funding</h1>
          <p className="about-subtitle">꿈을 현실로 만드는 크라우드펀딩 플랫폼</p>
          <div className="about-buttons">
            <a 
              href="https://github.com/exile175r/idea-funding" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              GitHub 보기
            </a>
          </div>
        </section>

        {/* 프로젝트 개요 */}
        <section className="about-section">
          <h2 className="section-title">프로젝트 개요</h2>
          <div className="section-content">
            <p className="about-description">
              Idea Funding은 창의적인 아이디어를 가진 창작자와 후원자를 연결하는 크라우드펀딩 플랫폼입니다.
              사용자들은 다양한 프로젝트를 탐색하고, 관심 있는 프로젝트에 후원할 수 있으며,
              커뮤니티를 통해 아이디어를 공유하고 소통할 수 있습니다.
            </p>
            <div className="project-info-grid">
              <div className="info-card">
                <div className="info-icon">🎯</div>
                <h3>프로젝트 목표</h3>
                <p>실제 사용 가능한 크라우드펀딩 플랫폼 구현</p>
              </div>
              <div className="info-card">
                <div className="info-icon">👤</div>
                <h3>개발 인원</h3>
                <p>1명 (개인 프로젝트)</p>
              </div>
              <div className="info-card">
                <div className="info-icon">📅</div>
                <h3>개발 기간</h3>
                <p>2025년</p>
              </div>
              <div className="info-card">
                <div className="info-icon">🌐</div>
                <h3>배포</h3>
                <p>GitHub Pages</p>
              </div>
            </div>
          </div>
        </section>

        {/* 기술 스택 */}
        <section className="about-section">
          <h2 className="section-title">기술 스택</h2>
          <div className="section-content">
            <div className="tech-grid">
              {techStack.map((tech, index) => (
                <div key={index} className="tech-card">
                  <h3 className="tech-name">
                    {tech.name}
                    {tech.version && <span className="tech-version">v{tech.version}</span>}
                  </h3>
                  <p className="tech-description">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 주요 기능 */}
        <section className="about-section">
          <h2 className="section-title">주요 기능</h2>
          <div className="section-content">
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 개발 과정 */}
        <section className="about-section">
          <h2 className="section-title">개발 과정</h2>
          <div className="section-content">
            <div className="process-timeline">
              <div className="timeline-item">
                <div className="timeline-marker">1</div>
                <div className="timeline-content">
                  <h3>기획 및 설계</h3>
                  <p>프로젝트 구조 설계, 컴포넌트 분리 계획, 데이터 구조 정의</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">2</div>
                <div className="timeline-content">
                  <h3>UI/UX 개발</h3>
                  <p>반응형 레이아웃 구현, 사용자 친화적인 인터페이스 디자인</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">3</div>
                <div className="timeline-content">
                  <h3>기능 구현</h3>
                  <p>라우팅, 검색, 필터링, 후원 시스템 등 핵심 기능 개발</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">4</div>
                <div className="timeline-content">
                  <h3>최적화 및 배포</h3>
                  <p>성능 최적화, GitHub Pages 배포, 지속적인 개선</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 배운 점 */}
        <section className="about-section">
          <h2 className="section-title">배운 점</h2>
          <div className="section-content">
            <ul className="learned-list">
              <li>React Hooks를 활용한 상태 관리 및 컴포넌트 최적화</li>
              <li>React Router를 이용한 클라이언트 사이드 라우팅 구현</li>
              <li>컴포넌트 기반 아키텍처 설계 및 재사용 가능한 코드 작성</li>
              <li>반응형 웹 디자인 및 사용자 경험 개선</li>
              <li>GitHub Pages를 활용한 정적 사이트 배포</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;

