import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Comment from '../pages/Comments/Comment';
import Detail from '../pages/Detail/Detail';
import Login from '../pages/Login';
import Main from '../pages/Main/Main';
import Posts from '../pages/Posts/Posts';
import SignUp from '../pages/SignUp/SignUp';

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/detail/:id/comment" element={<Comment />} />
          <Route path="/detail/:id/comment/:id" element={<Comment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
