import { useState } from 'react';

const CommunitySearch = ({ handleSearch }) => {
  const [value, setValue] = useState('');

  const handleInputChange = ({ target }) => {
    const newValue = target.value;
    setValue(newValue);
    handleSearch(newValue);
  };

  const handleSearchButtonClick = () => {
    if (!value) return;
    setValue('');
    handleSearch('');
  };

  return (
    <div className="community-search">
      <div className="search-controls">
        <div className="search-form">
          <div className="search-input-group">
            <input type="text" className="search-input" placeholder="검색어를 입력하세요" value={value} onChange={handleInputChange} />
            <button type="submit" className="search-button" onClick={handleSearchButtonClick}>
              {!value ?
                '검색'
                :
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" fill="currentColor" />
                </svg>}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommunitySearch;