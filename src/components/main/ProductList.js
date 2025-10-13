import React from 'react';
import ProductSection from './ProductSection';

const ProductList = ({ sections, onProductClick }) => {
  return (
    <>
      {sections.map((section) => (
        <ProductSection
          key={section.id}
          sectionId={section.id}
          title={section.title}
          products={section.products}
          onProductClick={onProductClick}
        />
      ))}
    </>
  );
};

export default ProductList;
