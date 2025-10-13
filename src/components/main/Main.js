import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductList from './ProductList';
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

  const sections = useProductData(data, SECTION_DATA);

  const handleProductClick = (product) => {
    // Funding 페이지로 직접 이동 (프로젝트 상세 + 후원)
    navigate(`/funding/${product.id}`, { state: { project: product } });
  };

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