import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getImagePath } from '../../productData';
import './Funding.css';

export default function Funding({ data }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedAmount, setSelectedAmount] = useState(0);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedImage, setSelectedImage] = useState('');

  // URL 파라미터나 state에서 프로젝트 정보 가져오기
  const project = data.find(item => item.id === parseInt(id)) || location.state?.project;

  // 프로젝트가 없으면 홈으로 리다이렉트
  if (!project) {
    navigate('/');
    return null;
  }

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmount = ({ target }) => {
    const value = parseInt(target.value) || 0;
    setCustomAmount(value);
    setSelectedAmount(value);
  };

  const handleFunding = () => {
    if (selectedAmount < 1000) {
      alert('최소 후원 금액은 1,000원입니다.');
      return;
    }

    // 실제로는 결제 API 호출
    alert(`${selectedAmount.toLocaleString()}원 후원이 완료되었습니다!`);
    navigate('/project');
  };

  const handleImageClick = ({ target }) => {
    const image = target.src || getImagePath(`${project.image_url}${project.image_name[0]}`);
    setSelectedImage(image);
  };

  return (
    <main className="funding-page">
      <div className="funding-container">
        <button
          className="back-button"
          onClick={() => navigate('/project')}
        >
          ← 프로젝트 목록으로
        </button>

        <div className="funding-layout">
          {/* 좌측 섹션 */}
          <div className="project-detail-section">
            <div className="project-header">
              <div className="project-main-image-container">
                <ul className="project-main-image-list-container">
                  {project.image_name.map((image, index) => (
                    <li key={index}>
                      <img
                        onClick={handleImageClick}
                        src={getImagePath(`${project.image_url}${image}`)}
                        alt={project.name}
                        className="project-main-image-list"
                      />
                    </li>
                  ))}
                </ul>
                <img
                  src={selectedImage ? selectedImage : getImagePath(`${project.image_url}${project.image_name[0]}`)}
                  alt={project.name}
                  className="project-main-image"
                />
              </div>
            </div>

            <div className="project-description">
              <h2>프로젝트 소개</h2>
              <p>{project.description}</p>
            </div>

            <div className="project-story">
              <h2>{project.story.title}</h2>
              <p className='project-story-content'>{project.story.content}</p>
              <ul className='project-story-features'>
                {project.story.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <p className='project-story-overview'>{project.story.inner.overview.map((overview, index) => (
                <span key={index}>{overview}</span>
              ))}
              </p>
              <ul className='project-story-key-features'>
                {project.story.inner.keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div className="project-story-usage-scenarios">
                {project.story.inner.usageScenarios.map((scenario, index) => (
                  <div key={index} className="grid-item">
                    {scenario[0] === 'text' ? <p>{scenario[1]}</p> : <img src={getImagePath(`${project.image_url}${scenario[1]}`)} alt={project.name} />}
                  </div>
                ))}
              </div>
              <ul className='project-story-specifications'>
                {project.story.inner.specifications.map((specification, index) => (
                  <li key={index}><span>{specification[0]}</span><span>{specification[1]}</span></li>
                ))}
              </ul>
            </div>
            <div className="project-creator-info">
              <h2>창작자 소개</h2>
              <div className="creator-card">
                <div className="creator-details">
                  <h3>{project.creator.name}</h3>
                  <p>{project.creator.profile}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 우측 섹션 */}
          <div className="funding-section">
            {/* 프로젝트 정보 요약 */}
            <div className="project-summary">
              <img
                src={getImagePath(`${project.image_url}${project.image_name[0]}`)}
                alt={project.name}
                className="project-thumbnail"
              />
              <div className="project-info">
                <h1 className="project-title">{project.name}</h1>
                <p className="project-creator">by {project.creator.name}</p>
                <div className="project-timeline">
                  <div className="timeline-item">
                    <div className="timeline-date">시작일</div>
                    <div className="timeline-content">{project.funding.startDate}</div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-date">마감일</div>
                    <div className="timeline-content">{project.funding.endDate}</div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-date">남은 기간</div>
                    <div className="timeline-content">{project.funding.daysLeft}일</div>
                  </div>
                </div>
                <div className="funding-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${project.funding.percent}%` }}
                    ></div>
                  </div>
                  <div className="progress-stats">
                    <span className="percent">{project.funding.percent}% 달성</span>
                    <span className="amount">
                      {project.funding.current.toLocaleString()}원 / {project.funding.goal.toLocaleString()}원
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 후원 금액 선택 */}
            <div className="funding-amount-section">
              <h2 className="section-title">후원 금액을 선택해주세요</h2>

              <div className="amount-options">
                {[10000, 50000, 100000, 200000].map(amount => (
                  <button
                    key={amount}
                    className={`amount-option ${selectedAmount === amount ? 'selected' : ''}`}
                    onClick={() => handleAmountSelect(amount)}
                  >
                    {amount.toLocaleString()}원
                  </button>
                ))}
              </div>

              <div className="custom-amount">
                <label htmlFor="customAmount">직접 입력</label>
                <input
                  id="customAmount"
                  type="number"
                  value={customAmount}
                  onChange={handleCustomAmount}
                  placeholder="금액을 입력하세요"
                  min="1000"
                  step={1000}
                />
                <span className="currency">원</span>
              </div>
            </div>

            {/* 후원 요약 */}
            <div className="funding-summary">
              <h2 className="section-title">후원 요약</h2>
              <div className="summary-content">
                <div className="summary-total">
                  <span className="label">총 후원 금액</span>
                  <span className="value">{selectedAmount.toLocaleString()}원</span>
                </div>
              </div>

              <button
                className="funding-button"
                onClick={handleFunding}
                disabled={selectedAmount < 1000}
              >
                {selectedAmount < 1000 ? '최소 1,000원 이상 후원해주세요' : '후원하기'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
