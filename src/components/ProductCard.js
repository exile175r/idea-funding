import React from 'react';
import { getImagePath } from '../productData';
import './ProductCard.css';

const ProductCard = ({ product, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(product);
    }
  };

  return (
    <div
      data-id={product.id}
      onClick={handleClick}
      className="product-card"
    >
      <img
        src={getImagePath(`${product.image_url}${product.image_name[0]}`)}
        alt={product.name}
        className="product-image"
      />
      <div className="product-info">
        <div className="info">
          <em className="creator-name">{product.creator.name}</em>
          <span className="product-name">{product.name}</span>
        </div>
        <div className="percent">
          <span className="funding-percent">{product.funding.percent}% 달성</span>
          <span className="days-left">{product.funding.daysLeft}일 남음</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
