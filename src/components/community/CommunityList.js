import { useState } from 'react';

const CommunityList = ({ filteredData, filterList }) => {
  const [sortBy, setSortBy] = useState('전체');
  const [currentPage, setCurrentPage] = useState(0);
  const [postId, setPostId] = useState(null);
  const [likeList, setLikeList] = useState([]);
  const [likedPosts, setLikedPosts] = useState(new Set());

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
    setPostId(null);
  }

  const handleLikeClick = (itemId) => {
    const isCurrentlyLiked = likedPosts.has(itemId);

    if (isCurrentlyLiked) {
      // 좋아요 취소
      setLikedPosts(prev => {
        const newSet = new Set(prev);
        newSet.delete(itemId);
        return newSet;
      });
      setLikeList(prev => prev.filter(item => item.id !== itemId));
    } else {
      // 좋아요 추가
      setLikedPosts(prev => new Set(prev).add(itemId));
      setLikeList(prev => [...prev, { id: itemId, likes: 1 }]);
    }
  };

  const getLikeCount = (item) => {
    const likedItem = likeList.find(v => v.id === item.id);
    return likedItem ? item.likes + likedItem.likes : item.likes;
  };

  const isLiked = (itemId) => {
    return likedPosts.has(itemId);
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
              <div className={`post-item${postId === item.id ? ' on' : ''}`} onClick={() => setPostId(item.id)}>
                <div className="post-number">{item.id}</div>
                <div className="post-category">{item.category}</div>
                <div className="post-title">{item.title}</div>
                <div className="post-author">{item.author}</div>
                <div className="post-date">{item.date}</div>
                <div className="post-views">{item.views}</div>
                <div className="post-likes">
                  <span className="like-icon">♥</span>
                  <span className="like-count">{getLikeCount(item)}</span>
                </div>
              </div>
              <div className="post-content">
                <p>{item.content}</p>
                <button className="like-button"
                  onClick={() => { handleLikeClick(item.id) }}
                >
                  {isLiked(item.id) ? '♥' : '♡'}
                </button>
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
            setPostId(null);
          }
        }>이전</button>
        <div className="page-numbers">
          {filterList.map((_, index) => (
            <button
              className={`page-number ${currentPage === index ? 'active' : ''}`}
              key={index}
              onClick={() => {
                setCurrentPage(index);
                setPostId(null);
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
            setPostId(null);
          }
        }>다음</button>
      </div>
    </>
  )
}

export default CommunityList;