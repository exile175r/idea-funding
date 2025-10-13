import React, { useState } from 'react';
import './Community.css';
import CommunityList from './CommunityList';
import WriteForm from './WriteForm';
import CommunitySearch from './CommunitySearch';
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

  const [currentView, setCurrentView] = useState('list');
  const [filterList, setFilterList] = useState(dataSplit(community));

  const handleWriteButtonClick = () => {
    setCurrentView(currentView === 'list' ? 'write' : 'list');
    setFilterList(dataSplit(community.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())));
  }

  const currentViewChange = (view) => {
    setCurrentView(view);
  }

  const handleNewPost = (post) => {
    post.id = community.length + 1;
    community.push(post);
    setFilterList(dataSplit(community.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())));
  }

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

  return (
    <main className="community-page">
      <div className="community-container">
        <div className="community-header">
          <h1 className="page-title">아이디어 창고</h1>

          {currentView === 'list' && <CommunitySearch handleSearch={handleSearch} />}

          <div className="header-actions">
            <button className="write-button" onClick={handleWriteButtonClick}>
              {currentView === 'list' ? '작성하기' : '목록으로'}
            </button>
          </div>
        </div>

        {currentView === 'list' && <CommunityList filteredData={filteredData} filterList={filterList} />}
        {currentView === 'write' && <WriteForm onCurrentViewChange={currentViewChange} setNewPost={handleNewPost} />}
      </div>
    </main>
  )
}

export default Community;