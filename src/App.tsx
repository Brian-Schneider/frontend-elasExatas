import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './paginas/login/Login'

import './App.css'

function App() {

  return (
    <BrowserRouter>
    <div style={{ minHeight: '100vh' }}>
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  </BrowserRouter>
  )
}

export default App
