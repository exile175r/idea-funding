import React, { useState } from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { product } from './productData';
import Scroll from './components/Scroll';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Project from './components/project/Project';
import Funding from './components/funding/Funding';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import FindId from './components/auth/FindId';
import FindPassword from './components/auth/FindPassword';
import Community from './components/community/Community';

const Router = process.env.NODE_ENV === 'production' ? HashRouter : BrowserRouter;

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      <Scroll />
      <div className="App">
        <Header data={product} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route path="/" element={<Main data={product} />} />
          <Route path="/project" element={<Project data={product} />} />
          <Route path="/funding/:id" element={<Funding data={product} />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/find-id" element={<FindId />} />
          <Route path="/find-password" element={<FindPassword />} />
          <Route path="/idea" element={<Community />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}