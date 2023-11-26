import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from 'pages/Login';
import MembersIndex from 'pages/MembersIndex';
import RegisterMember from 'pages/Register/Member';
import SignUp from 'pages/SignUp';
import TeamsIndex from 'pages/TeamsIndex';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MembersIndex />} exact />
        <Route path='/register/member' element={<RegisterMember />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/teams' element={<TeamsIndex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
