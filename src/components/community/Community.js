import React, { useState } from 'react';
import './Community.css';
import CommunityList from './CommunityList';
import WriteForm from './WriteForm';
import CommunitySearch from './CommunitySearch';
import PostDetail from './PostDetail';
import Modal from '../common/Modal';
import communityData from '../../communityData';

const Community = () => {
  const community = communityData;
  const dataSplit = (data) => {
    let splitList = [], newList = [];
    data.forEach((v, i) => {
      splitList.push(v);
      if (splitList.length === 7) {
        newList.push(splitList);
        splitList = [];
      } else if (i === data.length - 1) {
        if (splitList.length) {
          newList.push(splitList);
          splitList = [];
        }
      }
    });
    return newList;
  }

  const [filterList, setFilterList] = useState(dataSplit(community));
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [likeList, setLikeList] = useState([]);
  const [likedPosts, setLikedPosts] = useState(new Set());

  const handleWriteButtonClick = () => {
    setIsWriteModalOpen(true);
  };

  const handleNewPost = (post) => {
    post.id = community.length + 1;
    community.push(post);
    setFilterList(dataSplit(community.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())));
    setIsWriteModalOpen(false);
  };

  const handleSearch = (keyword) => {
    const filteredList = community.filter(item =>
      item.title.toLowerCase().includes(keyword.toLowerCase()) ||
      item.category.toLowerCase().includes(keyword.toLowerCase()) ||
      item.author.toLowerCase().includes(keyword.toLowerCase()) ||
      item.content.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilterList(dataSplit(filteredList));
  }

  const filteredData = (key, value) => {
    let filteredList;
    switch (key) {
      case 'category': case 'type':
        filteredList = community.filter(item => item[key] === value);
        break;
      case 'likes':
        filteredList = community.sort((a, b) => b.likes - a.likes);
        break;
      case 'date':
        filteredList = community.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case 'all': default:
        filteredList = community.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
    }
    setFilterList(dataSplit(filteredList));
  }

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleClosePostModal = () => {
    setSelectedPost(null);
  };

  const handleLike = (postId) => {
    const isCurrentlyLiked = likedPosts.has(postId);

    if (isCurrentlyLiked) {
      setLikedPosts(prev => {
        const newSet = new Set(prev);
        newSet.delete(postId);
        return newSet;
      });
      setLikeList(prev => prev.filter(item => item.id !== postId));
    } else {
      setLikedPosts(prev => new Set(prev).add(postId));
      setLikeList(prev => [...prev, { id: postId, likes: 1 }]);
    }
  };

  const getLikeCount = (post) => {
    const likedItem = likeList.find(v => v.id === post.id);
    return likedItem ? post.likes + likedItem.likes : post.likes;
  };

  const isLiked = (postId) => {
    return likedPosts.has(postId);
  };

  return (
    <main className="community-page">
      <div className="community-container">
        <div className="community-header">
          <h1 className="page-title">아이디어 창고</h1>

          <CommunitySearch handleSearch={handleSearch} />

          <div className="header-actions">
            <button className="write-button" onClick={handleWriteButtonClick}>
              작성하기
            </button>
          </div>
        </div>

        <CommunityList 
          filteredData={filteredData} 
          filterList={filterList}
          onPostClick={handlePostClick}
          onLike={handleLike}
          isLiked={isLiked}
          getLikeCount={getLikeCount}
        />

        {/* 게시글 작성 모달 */}
        <Modal 
          isOpen={isWriteModalOpen} 
          onClose={() => setIsWriteModalOpen(false)}
          title="게시글 작성"
        >
          <WriteForm 
            onCurrentViewChange={() => setIsWriteModalOpen(false)} 
            setNewPost={handleNewPost} 
          />
        </Modal>

        {/* 게시글 상세 모달 */}
        {selectedPost && (
          <Modal 
            isOpen={!!selectedPost} 
            onClose={handleClosePostModal}
            title={selectedPost.title}
          >
            <PostDetail 
              post={selectedPost}
              onLike={handleLike}
              isLiked={isLiked(selectedPost.id)}
              likeCount={getLikeCount(selectedPost)}
              onClose={handleClosePostModal}
            />
          </Modal>
        )}
      </div>
    </main>
  )
}

export default Community;