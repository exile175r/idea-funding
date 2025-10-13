import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryList = ({ categories }) => {
  const navigate = useNavigate();

  return (
    <ul className="category-list">
      {categories.map((category, index) => (
        <li key={index} className="category-item" onClick={() => navigate(`/project?category=${category}`)}>
          {category}
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
