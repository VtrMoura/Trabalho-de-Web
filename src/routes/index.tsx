import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import UserRegister from '../pages/UserRegister';
import UserList from '../pages/UserList';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<UserRegister />} />
      <Route path="/users" element={<UserList />} />
    </Routes>
  );
};

export default AppRoutes;