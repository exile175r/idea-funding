import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AuthCommon.css';
import './FindId.css';

const FindId = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const [foundId, setFoundId] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // 입력 시 에러 메시지 제거
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = '이름을 입력해주세요.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = '이름은 2자 이상이어야 합니다.';
    }

    if (!formData.phone) {
      newErrors.phone = '휴대폰 번호를 입력해주세요.';
    } else if (!/^010-\d{4}-\d{4}$/.test(formData.phone)) {
      newErrors.phone = '올바른 휴대폰 번호 형식을 입력해주세요. (예: 010-1234-5678)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 3) {
      value = value.slice(0, 3) + '-' + value.slice(3);
    }
    if (value.length >= 8) {
      value = value.slice(0, 8) + '-' + value.slice(8, 12);
    }
    setFormData(prev => ({
      ...prev,
      phone: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSearching(true);

      // 실제 아이디 찾기 로직 구현
      setTimeout(() => {
        // 임시로 가짜 결과 반환
        setFoundId('user@example.com');
        setIsSearching(false);
      }, 2000);
    }
  };

  const maskEmail = (email) => {
    const [localPart, domain] = email.split('@');
    const maskedLocal = localPart.slice(0, 2) + '*'.repeat(localPart.length - 2);
    return `${maskedLocal}@${domain}`;
  };

  return (
    <div className="auth-page find-id-page">
      <div className="auth-container find-id-container">
        <div className="auth-header find-id-header">
          <h1>아이디 찾기</h1>
          <p>가입 시 입력한 정보로 아이디를 찾을 수 있습니다.</p>
        </div>

        {!foundId ? (
          <form className="auth-form find-id-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">이름</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="이름을 입력하세요"
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">휴대폰 번호</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handlePhoneChange}
                placeholder="010-1234-5678"
                className={errors.phone ? 'error' : ''}
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>

            <button type="submit" className="auth-button find-button" disabled={isSearching}>
              {isSearching ? (
                <>
                  <div className="spinner"></div>
                  찾는 중...
                </>
              ) : (
                '아이디 찾기'
              )}
            </button>
          </form>
        ) : (
          <div className="result-section">
            <div className="success-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#667eea" strokeWidth="2" />
                <path d="m9 12 2 2 4-4" stroke="#667eea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>아이디를 찾았습니다!</h3>
            <div className="found-id">
              <span className="label">찾은 아이디:</span>
              <span className="value">{maskEmail(foundId)}</span>
            </div>
            <div className="result-actions">
              <Link to="/login" className="action-button login-link">로그인하기</Link>
              <button
                className="action-button secondary find-password-link"
                onClick={() => window.location.href = '/find-password'}
              >
                비밀번호 찾기
              </button>
            </div>
          </div>
        )}

        <div className="auth-links find-id-links">
          <Link to="/login" className="link">로그인</Link>
          <Link to="/signup" className="link">회원가입</Link>
          <Link to="/find-password" className="link">비밀번호 찾기</Link>
        </div>
      </div>
    </div>
  );
};

export default FindId;
