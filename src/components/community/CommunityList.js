import { useState } from 'react';

const CommunityList = ({ filteredData, filterList, onPostClick, onLike, isLiked, getLikeCount }) => {
  const [sortBy, setSortBy] = useState('전체');
  const [currentPage, setCurrentPage] = useState(0);

  const sortOptions = [
    { key: 'all', value: '전체', label: '전체(최신순)' },
    { key: 'date', value: '날짜', label: '오래된순' },
    { key: 'likes', value: '인기', label: '인기순' },
    { key: 'type', value: '아이디어', label: '제품 아이디어' },
    { key: 'type', value: '후기', label: '제품 후기' }
  ];

  const handleSortClick = (key, value) => {
    setSortBy(value);
    filteredData(key, value);
    setCurrentPage(0);
  }

  const handleLikeClick = (e, itemId) => {
    e.stopPropagation(); // 클릭 이벤트가 부모로 전파되지 않도록
    if (onLike) {
      onLike(itemId);
    }
  };

  return (
    <>
      <div className="community-list">
        <div className="list-header">
          <div className="sort-options">
            {sortOptions.map(option => (
              <button
                key={option.value}
                className={`sort-button${sortBy === option.value ? ' active' : ''}`}
                onClick={() => handleSortClick(option.key, option.value)}>
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="post-list">
          {filterList.length > 0 && filterList[currentPage] && filterList[currentPage].map((item, index) => (
            <div className='post-item-container' key={index}>
              <div className="post-item" onClick={() => onPostClick && onPostClick(item)}>
                <div className="post-number">{item.id}</div>
                <div className="post-category">{item.category}</div>
                <div className="post-title">{item.title}</div>
                <div className="post-author">{item.author}</div>
                <div className="post-date">{item.date}</div>
                <div className="post-views">{item.views}</div>
                <div className="post-likes" onClick={(e) => handleLikeClick(e, item.id)}>
                  <span className={`like-icon ${isLiked && isLiked(item.id) ? 'liked' : ''}`}>
                    {isLiked && isLiked(item.id) ? '♥' : '♡'}
                  </span>
                  <span className="like-count">{getLikeCount ? getLikeCount(item) : item.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pagination">
        <button className="page-button prev" onClick={
          () => {
            if (currentPage > 0) setCurrentPage(currentPage - 1);
            else setCurrentPage(0);
          }
        }>이전</button>
        <div className="page-numbers">
          {filterList.map((_, index) => (
            <button
              className={`page-number ${currentPage === index ? 'active' : ''}`}
              key={index}
              onClick={() => {
                setCurrentPage(index);
              }}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button className="page-button next" onClick={
          () => {
            const len = filterList.length - 1;
            if (currentPage < len) setCurrentPage(currentPage + 1);
            else setCurrentPage(len);
          }
        }>다음</button>
      </div>
    </>
  )
}

export default CommunityList;