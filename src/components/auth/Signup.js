import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AuthCommon.css';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    agreeTerms: false,
    agreePrivacy: false,
    agreeMarketing: false
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
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

    if (!formData.email) {
      newErrors.email = '이메일을 입력해주세요.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '올바른 이메일 형식을 입력해주세요.';
    }

    if (!formData.password) {
      newErrors.password = '비밀번호를 입력해주세요.';
    } else if (formData.password.length < 8) {
      newErrors.password = '비밀번호는 8자 이상이어야 합니다.';
    } else if (!/(?=.*[a-zA-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = '비밀번호는 영문과 숫자를 포함해야 합니다.';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = '비밀번호 확인을 입력해주세요.';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = '비밀번호가 일치하지 않습니다.';
    }

    if (!formData.phone) {
      newErrors.phone = '휴대폰 번호를 입력해주세요.';
    } else if (!/^010-\d{4}-\d{4}$/.test(formData.phone)) {
      newErrors.phone = '올바른 휴대폰 번호 형식을 입력해주세요. (예: 010-1234-5678)';
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = '이용약관에 동의해주세요.';
    }

    if (!formData.agreePrivacy) {
      newErrors.agreePrivacy = '개인정보처리방침에 동의해주세요.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // 실제 회원가입 로직 구현
      console.log('회원가입 시도:', formData);

      // 임시로 로그인 페이지로 이동
      navigate('/login');
    }
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

  const handleSocialSignup = (provider) => {
    console.log(`${provider} 회원가입 시도`);
    // 실제 소셜 회원가입 로직 구현
  };

  return (
    <div className="auth-page signup-page">
      <div className="auth-container signup-container">
        <div className="auth-header signup-header">
          <h1>회원가입</h1>
          <p>아이디어 펀딩과 함께 시작하세요!</p>
        </div>

        <form className="auth-form signup-form" onSubmit={handleSubmit}>
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
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="8자 이상, 영문과 숫자 포함"
              className={errors.password ? 'error' : ''}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">비밀번호 확인</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="비밀번호를 다시 입력하세요"
              className={errors.confirmPassword ? 'error' : ''}
            />
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
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

          <div className="agreement-section">
            <h3>약관 동의</h3>

            <div className="agreement-item">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                />
                <span className="checkmark"></span>
                <span className="agreement-text">
                  <strong>이용약관</strong>에 동의합니다 (필수)
                </span>
              </label>
              {errors.agreeTerms && <span className="error-message">{errors.agreeTerms}</span>}
            </div>

            <div className="agreement-item">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="agreePrivacy"
                  checked={formData.agreePrivacy}
                  onChange={handleInputChange}
                />
                <span className="checkmark"></span>
                <span className="agreement-text">
                  <strong>개인정보처리방침</strong>에 동의합니다 (필수)
                </span>
              </label>
              {errors.agreePrivacy && <span className="error-message">{errors.agreePrivacy}</span>}
            </div>

            <div className="agreement-item">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="agreeMarketing"
                  checked={formData.agreeMarketing}
                  onChange={handleInputChange}
                />
                <span className="checkmark"></span>
                <span className="agreement-text">
                  <strong>마케팅 정보 수신</strong>에 동의합니다 (선택)
                </span>
              </label>
            </div>
          </div>

          <button type="submit" className="auth-button signup-button">
            회원가입
          </button>
        </form>

        <div className="auth-links signup-links">
          <Link to="/login" className="link">이미 계정이 있으신가요? 로그인</Link>
        </div>

        <div className="social-auth social-signup">
          <div className="divider">
            <span>또는</span>
          </div>

          <div className="social-buttons">
            <button
              className="social-button google"
              onClick={() => handleSocialSignup('Google')}
            >
              <svg className="social-icon" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google로 계속하기
            </button>

            <button
              className="social-button naver"
              onClick={() => handleSocialSignup('Naver')}
            >
              <svg className="social-icon" viewBox="0 0 24 24">
                <path fill="#03C75A" d="M16.273 12.845 7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845Z" />
              </svg>
              Naver로 계속하기
            </button>

            <button
              className="social-button kakao"
              onClick={() => handleSocialSignup('Kakao')}
            >
              <svg className="social-icon" viewBox="0 0 24 24">
                <path fill="#3C1E1E" d="M12 3C6.486 3 2 6.262 2 10.2c0 2.4 1.6 4.5 4 5.8V21l3.5-2.1c.5.1 1 .1 1.5.1 5.514 0 10-3.262 10-7.2S17.514 3 12 3z" />
              </svg>
              카카오로 계속하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
