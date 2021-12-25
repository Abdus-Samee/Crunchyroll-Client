import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'

import Dashboard from './components/Dashboard'
import Login from './components/Login/Login'
import Preference from './components/Preference'
import Navbar from './components/Navbar/Navbar'

import useToken from './hooks/useToken'

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken))
}

function getToken() {
  const tokenString = sessionStorage.getItem('token')
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const { token, setToken } = useToken()

  function refreshToken(){
    setToken('')
  }

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <Router>
        <Navbar logOutFunction={refreshToken} />
        <h1>Application</h1>
        <button onClick={refreshToken}>Log out</button>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preference />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App