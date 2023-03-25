import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Login from '../pages/Login';
import Main from '../pages/Main/Main';
import SignUp from '../pages/SignUp/SignUp';

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/header" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
