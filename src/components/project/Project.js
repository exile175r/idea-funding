import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ProductCard from '../ProductCard';
import searchData from '../../hooks/useDataSearch';
import './Project.css';

export default function Project({ data }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const term = searchParams.get('search') || searchParams.get('category');
  const filteredData = term ? searchData(data, term) : data;

  return (
    <main className="project-list-page">
      <div className="project-list-container">
        <h1 className="page-title">프로젝트</h1>
        <div className="project-grid">
          {!term ?
            data.map((project) => (
              <ProductCard
                key={project.id}
                product={project}
                onClick={() => navigate(`/funding/${project.id}`, { state: { project } })}
              />
            ))
            :
            filteredData.length > 0 ?
              filteredData.map((project) => (
                <ProductCard
                  key={project.id}
                  product={project}
                  onClick={() => navigate(`/funding/${project.id}`, { state: { project } })}
                />
              ))
              :
              <div className="no-results">검색 결과가 없습니다.</div>
          }
        </div>
      </div>
    </main>
  );
}