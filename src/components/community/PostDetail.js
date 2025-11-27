import React, { useState } from 'react';
import './PostDetail.css';

const PostDetail = ({ post, onLike, isLiked, likeCount, onClose }) => {
  if (!post) return null;

  return (
    <div className="post-detail">
      <div className="post-detail-header">
        <div className="post-detail-meta">
          <span className="post-detail-category">{post.category}</span>
          <span className="post-detail-type">{post.type}</span>
        </div>
        <h2 className="post-detail-title">{post.title}</h2>
        <div className="post-detail-info">
          <span className="post-detail-author">작성자: {post.author}</span>
          <span className="post-detail-date">{post.date}</span>
          <span className="post-detail-views">조회수: {post.views}</span>
        </div>
      </div>

      <div className="post-detail-content">
        <p>{post.content}</p>
      </div>

      <div className="post-detail-footer">
        <button 
          className={`post-detail-like-button ${isLiked ? 'liked' : ''}`}
          onClick={() => onLike(post.id)}
        >
          <span className="like-icon">{isLiked ? '♥' : '♡'}</span>
          <span className="like-count">{likeCount}</span>
        </button>
      </div>
    </div>
  );
};

export default PostDetail;

