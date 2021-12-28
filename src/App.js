import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from '@mui/material'

import './App.css'

import Dashboard from './components/Dashboard'
import Preference from './components/Preference'
import Navbar from './components/Navbar/Navbar'
import ToggleForm from './components/ToggleForm/ToggleForm'
import Anime from './components/Anime'
import Manga from './components/Manga'

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

  // if(!token) {
  //   // return <Login setToken={setToken} />
  //   return <ToggleForm setToken={setToken} />
  // }

  return (
    <div className="wrapper">
      <Router>
        <Navbar token={token} logOutFunction={refreshToken} />
        <Container>
          <br/>
          <Routes>
            <Route path="/" exact element={<Preference />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/authentication" element={<ToggleForm setToken={setToken} />} />
            <Route path="/anime" element={<Anime />} />
            <Route path="/manga" element={<Manga />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App