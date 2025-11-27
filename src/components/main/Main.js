import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductList from './ProductList';
import Loading from '../common/Loading';
import { getImagePath } from '../../productData';
import useProductData from '../../hooks/useProductData';

// sectionData를 컴포넌트 외부로 이동하여 매번 새로 생성되지 않도록 함
const SECTION_DATA = [
  { id: 'featured', title: '주목할 만한 프로젝트' },
  { id: 'recommended', title: '이런 프로젝트 어때요?' },
  { id: 'closing-soon', title: '마감임박! 마지막 기회' },
  { id: 'new-projects', title: '신규 프로젝트' }
];

const Main = ({ data }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const sections = useProductData(data, SECTION_DATA);

  useEffect(() => {
    // 데이터 로딩 시뮬레이션 (실제로는 API 호출 등)
    if (data && data.length > 0) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, [data]);

  const handleProductClick = (product) => {
    // Funding 페이지로 직접 이동 (프로젝트 상세 + 후원)
    navigate(`/funding/${product.id}`, { state: { project: product } });
  };

  if (isLoading) {
    return <Loading message="프로젝트를 불러오는 중..." />;
  }

  if (!data || data.length === 0) {
    return (
      <main>
        <div style={{ padding: '60px 20px', textAlign: 'center' }}>
          <p>표시할 프로젝트가 없습니다.</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <section id="banner">
        <div>
          <video src={getImagePath("/videos/main-banner.mp4")} muted loop autoPlay></video>
        </div>
      </section>
      <ProductList
        sections={sections}
        onProductClick={handleProductClick}
      />
    </main>
  );
};

export default Main;