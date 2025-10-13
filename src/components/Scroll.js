import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Scroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 페이지 전환 시 스크롤을 맨 위로
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      // const windowHeight = window.innerHeight;
      // const documentHeight = document.documentElement.scrollHeight;

      // 스크롤 위치에 따른 다양한 효과
      // console.log('스크롤 위치:', scrollTop);

      // 헤더 스타일 변경 (스크롤 시 투명도 조절)
      const header = document.querySelector('.header');
      if (header) {
        if (scrollTop > 10) {
          header.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
          header.style.backdropFilter = 'blur(10px)';
          header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
          header.removeAttribute('style');
        }
      }

      // 스크롤 진행률 계산
      // const scrollProgress = (scrollTop / (documentHeight - windowHeight)) * 100;
      // console.log('스크롤 진행률:', scrollProgress.toFixed(2) + '%');

      // 특정 섹션에 도달했을 때 애니메이션
      // const sections = document.querySelectorAll('.product-section');
      // sections.forEach((section, index) => {
      //   const sectionTop = section.offsetTop;
      //   const sectionHeight = section.offsetHeight;

      //   if (scrollTop >= sectionTop - windowHeight / 2) {
      //     section.style.opacity = '1';
      //     section.style.transform = 'translateY(0)';
      //   }
      // });
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}

export default Scroll;