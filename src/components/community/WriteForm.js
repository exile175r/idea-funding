import { useState } from 'react';
import './WriteForm.css';

const WriteForm = ({ onCurrentViewChange, setNewPost }) => {
  const [postType, setPostType] = useState('아이디어');
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    author: 'Guest',
    date: new Date().toLocaleDateString().split(' ').join(''),
    views: 0,
    likes: 0,
    content: '',
    type: ''
  });

  const handlePostTypeChange = ({ target }) => {
    setPostType(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCurrentViewChange('list');
    console.log(formData);
    setNewPost(formData);
  };

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      type: postType
    }));
  };

  const handleStarRating = ({ target }) => {
    if (target.classList[0] !== 'star') return;
    const parent = target.closest('.star-rating');
    const stars = parent.querySelectorAll('.star');
    stars.forEach(star => star.classList.remove('active'));

    const idx = [...stars].indexOf(target);
    let i = idx;
    while (i >= 0) {
      stars[i].classList.add('active');
      i--;
    }

    setFormData(prev => ({
      ...prev,
      rating: { ...prev.rating, [parent.dataset.rating]: idx + 1 }
    }));
  };

  return (
    <div className="write-form">
      <div className="form-header">
        <h2 className="form-title">게시글 작성</h2>
      </div>

      <div className="radio-group">
        <div className="radio-item">
          <input type="radio" id="idea" name="type" value="아이디어" checked={postType === '아이디어'} onChange={handlePostTypeChange} />
          <label htmlFor="idea">아이디어</label>
        </div>
        <div className="radio-item">
          <input type="radio" id="review" name="type" value="후기" checked={postType === 'review'} onChange={handlePostTypeChange} />
          <label htmlFor="review">후기</label>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">카테고리</label>
          <select id="category" name="category" onChange={handleInputChange}>
            <option value="">카테고리를 선택하세요</option>
            <option value="전자제품">전자제품</option>
            <option value="생활용품">생활용품</option>
            <option value="패션">패션</option>
            <option value="기타">기타</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="title">제목</label>
          <input type="text" id="title" name="title" placeholder="제목을 입력하세요" onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label htmlFor="content">내용</label>
          <textarea id="content" name="content" placeholder="내용을 입력하세요" onChange={handleInputChange}></textarea>
        </div>

        {/* 후기 작성 시 평가 항목 */}
        {postType === 'review' && <div className="rating-section">
          <h3>평가</h3>
          <div className="rating-item">
            <span className="rating-label">제품</span>
            <div className="star-rating" data-rating="product" onClick={handleStarRating} value={formData.rating.product} onChange={handleInputChange}>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
          </div>
          <div className="rating-item">
            <span className="rating-label">가격</span>
            <div className="star-rating" data-rating="price" onClick={handleStarRating} value={formData.rating.price} onChange={handleInputChange}>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
          </div>
          <div className="rating-item">
            <span className="rating-label">디자인</span>
            <div className="star-rating" data-rating="design" onClick={handleStarRating}>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
          </div>
        </div>}

        <div className="form-actions">
          <button type="button" className="cancel-button" onClick={() => onCurrentViewChange('list')}>취소</button>
          <button type="submit" className="submit-button">작성하기</button>
        </div>
      </form>
    </div>
  )
}

export default WriteForm;