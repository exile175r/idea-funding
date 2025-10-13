import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AuthCommon.css';
import './Login.css';

const Login = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
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

    if (!formData.email) {
      newErrors.email = '이메일을 입력해주세요.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '올바른 이메일 형식을 입력해주세요.';
    }

    if (!formData.password) {
      newErrors.password = '비밀번호를 입력해주세요.';
    } else if (formData.password.length < 6) {
      newErrors.password = '비밀번호는 6자 이상이어야 합니다.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // 실제 로그인 로직 구현
      console.log('로그인 시도:', formData);
      setLoggedIn(true);
      // 임시로 메인 페이지로 이동
      navigate('/');
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`${provider} 로그인 시도`);
    // 실제 소셜 로그인 로직 구현
  };

  return (
    <div className="auth-page login-page">
      <div className="auth-container login-container">
        <div className="auth-header login-header">
          <h1>로그인</h1>
          <p>아이디어 펀딩에 오신 것을 환영합니다!</p>
        </div>

        <form className="auth-form login-form" onSubmit={handleSubmit}>
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
              placeholder="비밀번호를 입력하세요"
              className={errors.password ? 'error' : ''}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
              />
              <span className="checkmark"></span>
              로그인 상태 유지
            </label>
          </div>

          <button type="submit" className="auth-button login-button">
            로그인
          </button>
        </form>

        <div className="auth-links login-links">
          <Link to="/signup" className="link">회원가입</Link>
          <Link to="/find-id" className="link">아이디 찾기</Link>
          <Link to="/find-password" className="link">비밀번호 찾기</Link>
        </div>

        <div className="social-auth social-login">
          <div className="divider">
            <span>또는</span>
          </div>

          <div className="social-buttons">
            <button
              className="social-button google"
              onClick={() => handleSocialLogin('Google')}
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
              onClick={() => handleSocialLogin('Naver')}
            >
              <svg className="social-icon" viewBox="0 0 24 24">
                <path fill="#03C75A" d="M16.273 12.845 7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845Z" />
              </svg>
              Naver로 계속하기
            </button>

            <button
              className="social-button kakao"
              onClick={() => handleSocialLogin('Kakao')}
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

export default Login;