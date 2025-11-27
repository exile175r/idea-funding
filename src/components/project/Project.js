import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ProductCard from '../ProductCard';
import Loading from '../common/Loading';
import searchData from '../../hooks/useDataSearch';
import './Project.css';

export default function Project({ data }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const term = searchParams.get('search') || searchParams.get('category');
  const filteredData = term ? searchData(data, term) : data;

  useEffect(() => {
    // 검색/필터링 시 로딩 상태 시뮬레이션
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, [term, data]);

  if (isLoading) {
    return <Loading message="프로젝트를 불러오는 중..." />;
  }

  if (!data || data.length === 0) {
    return (
      <main className="project-list-page">
        <div className="project-list-container">
          <h1 className="page-title">프로젝트</h1>
          <div className="no-results">표시할 프로젝트가 없습니다.</div>
        </div>
      </main>
    );
  }

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