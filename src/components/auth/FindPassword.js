import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AuthCommon.css';
import './FindPassword.css';

const FindPassword = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const [isSearching, setIsSearching] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

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

    if (!formData.email) {
      newErrors.email = '이메일을 입력해주세요.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '올바른 이메일 형식을 입력해주세요.';
    }

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

      // 실제 비밀번호 찾기 로직 구현
      setTimeout(() => {
        setIsEmailSent(true);
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
    <div className="auth-page find-password-page">
      <div className="auth-container find-password-container">
        <div className="auth-header find-password-header">
          <h1>비밀번호 찾기</h1>
          <p>가입 시 입력한 정보로 비밀번호 재설정 링크를 보내드립니다.</p>
        </div>

        {!isEmailSent ? (
          <form className="auth-form find-password-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">이메일</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="이메일을 입력하세요"
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

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
                  전송 중...
                </>
              ) : (
                '비밀번호 재설정 링크 전송'
              )}
            </button>
          </form>
        ) : (
          <div className="result-section">
            <div className="success-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#667eea" strokeWidth="2" />
                <polyline points="22,6 12,13 2,6" stroke="#667eea" strokeWidth="2" />
              </svg>
            </div>
            <h3>이메일을 전송했습니다!</h3>
            <div className="email-info">
              <p><strong>{maskEmail(formData.email)}</strong>로</p>
              <p>비밀번호 재설정 링크를 전송했습니다.</p>
            </div>
            <div className="email-notice">
              <p>• 이메일이 오지 않았다면 스팸함을 확인해주세요.</p>
              <p>• 링크는 24시간 후 만료됩니다.</p>
            </div>
            <div className="result-actions">
              <Link to="/login" className="action-button login-link">로그인하기</Link>
              <button
                className="action-button secondary resend-button"
                onClick={() => {
                  setIsEmailSent(false);
                  setFormData({ email: '', name: '', phone: '' });
                }}
              >
                다시 전송하기
              </button>
            </div>
          </div>
        )}

        <div className="auth-links find-password-links">
          <Link to="/login" className="link">로그인</Link>
          <Link to="/signup" className="link">회원가입</Link>
          <Link to="/find-id" className="link">아이디 찾기</Link>
        </div>
      </div>
    </div>
  );
};

export default FindPassword;
