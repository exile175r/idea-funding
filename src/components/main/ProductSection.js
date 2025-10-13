import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ProductCard from '../ProductCard';
import './ProductSection.css';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/navigation';

const ProductSection = ({
  sectionId,
  title,
  products,
  onProductClick
}) => {

  return (
    <section id={sectionId} className="product-section">
      <div className="section-container">
        <h2 className="section-title">{title}</h2>
        <div className="product-slider">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={4}
            navigation={true}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 25 },
              1024: { slidesPerView: 4, spaceBetween: 30 }
            }}
          >
            {products.map(product => (
              <SwiperSlide key={product.id}>
                <ProductCard
                  product={product}
                  onClick={onProductClick}
                />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section>
  );
};

export default ProductSection;
