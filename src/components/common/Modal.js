import React, { useEffect } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, children, title = null }) => {
  useEffect(() => {
    if (isOpen) {
      // 스크롤 이벤트만 막기 (스크롤바는 유지)
      const preventScroll = (e) => {
        // 모달 컨테이너 내부인지 확인
        const modalContainer = document.querySelector('.modal-container');
        if (modalContainer && modalContainer.contains(e.target)) {
          // 모달 내부 스크롤은 허용
          return;
        }
        // 모달 외부 스크롤은 막기
        e.preventDefault();
        e.stopPropagation();
        return false;
      };

      // 휠 스크롤 막기 (모달 컨텐츠 내부에서만 허용)
      const handleWheel = (e) => {
        const modalContent = document.querySelector('.modal-content');
        const modalContainer = document.querySelector('.modal-container');
        
        // 모달 컨텐츠 내부가 아니면 무조건 스크롤 막기
        // 모달 컨테이너나 헤더 위에서 스크롤해도 배경 스크롤 방지
        if (!modalContent || !modalContent.contains(e.target)) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
        
        // 모달 컨텐츠 내부에서도, 컨텐츠가 스크롤 가능한 상태인지 확인
        // 컨텐츠가 스크롤 불가능하면 배경 스크롤도 막기
        if (modalContent.scrollHeight <= modalContent.clientHeight) {
          // 컨텐츠가 스크롤 불가능하면 배경 스크롤 막기
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      };

      // 터치 스크롤 막기 (모달 컨텐츠 내부에서만 허용)
      const handleTouchMove = (e) => {
        const modalContent = document.querySelector('.modal-content');
        
        // 모달 컨텐츠 내부가 아니면 무조건 스크롤 막기
        if (!modalContent || !modalContent.contains(e.target)) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      };
      
      // 키보드 스크롤 막기 (모달 컨텐츠 내부에서만 허용)
      const handleKeyDown = (e) => {
        if (['Space', 'ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End'].includes(e.code)) {
          const modalContent = document.querySelector('.modal-content');
          
          // 모달 컨텐츠 내부가 아니면 스크롤 막기
          if (!modalContent || !modalContent.contains(e.target)) {
            e.preventDefault();
            return false;
          }
        }
      };

      // 이벤트 리스너 추가 (capture phase에서 처리)
      document.addEventListener('wheel', handleWheel, { passive: false, capture: true });
      document.addEventListener('touchmove', handleTouchMove, { passive: false, capture: true });
      document.addEventListener('keydown', handleKeyDown, { capture: true });

      return () => {
        // 이벤트 리스너 제거
        document.removeEventListener('wheel', handleWheel, { capture: true });
        document.removeEventListener('touchmove', handleTouchMove, { capture: true });
        document.removeEventListener('keydown', handleKeyDown, { capture: true });
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {title && (
          <div className="modal-header">
            <h2 className="modal-title">{title}</h2>
            <button className="modal-close" onClick={onClose} aria-label="닫기">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;

