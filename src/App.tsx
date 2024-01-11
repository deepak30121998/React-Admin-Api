import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './secure/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './secure/Users';
import Login from './public/Login';
import Wrapper from './secure/Wrapper';
import Register from './public/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Wrapper><Dashboard /></Wrapper>} />
          <Route path={'/users'} element={<Wrapper><Users /></Wrapper>} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/register'} element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
