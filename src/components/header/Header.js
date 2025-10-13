import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CategoryList from './CategoryList';
import searchData from '../../hooks/useDataSearch';
import { getImagePath } from '../../productData';
import './Header.css';

const Header = ({ data, loggedIn, setLoggedIn }) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchLiRef = useRef(null);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  const set = new Set();
  data.forEach(v => set.add(v.category));
  const categoryList = [...set];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchValue) return;
    navigate(`/project?search=${searchValue}`);
    searchLiRef.current.classList.remove('active');
    setSearchResults([]);
    setSearchValue('');
  };

  const handleSearch = ({ target }) => {
    const value = target.value;
    if (value) searchLiRef.current.classList.add('active');
    else searchLiRef.current.classList.remove('active');
    setSearchValue(value);
    const searchResults = searchData(data, value);
    if (value) setSearchResults(searchResults);
    else setSearchResults([]);
  };

  const handleSearchResultClick = ({ target }) => {
    const result = target.dataset.fullText;
    searchInputRef.current.value = result;
    setSearchValue(result);
    searchLiRef.current.classList.add('active');
    setSearchResults([]);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/"><img src={getImagePath("/images/logo.png")} alt="logo" /></Link>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item category">
              <button type="button" className="category-button">카테고리</button>
              <div className="dropdown">
                <CategoryList categories={categoryList} />
              </div>
            </li>
            <li className="nav-item"><Link to="/project" className="nav-link">프로젝트</Link></li>
            <li className="nav-item"><Link to="/idea" className="nav-link">아이디어 창고</Link></li>
            <li className="nav-item ml-auto">
              {loggedIn ?
                <Link to="/" className="nav-link" onClick={() => setLoggedIn(false)}>로그아웃</Link>
                :
                <Link to="/login" className="nav-link">로그인</Link>}
            </li>
            <li className="nav-item search" ref={searchLiRef}>
              <div className="search-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="search-container">
                <form onSubmit={handleSearchSubmit}>
                  <input type="text" placeholder="search..." value={searchValue} ref={searchInputRef} onChange={handleSearch} />
                  {searchResults.length > 0 && (
                    <div className="search-results">
                      {searchResults.map(result => (
                        <div key={result.id} data-full-text={result.name} onClick={handleSearchResultClick}>
                          <span className="full-text">{result.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <button type="submit">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </form>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;