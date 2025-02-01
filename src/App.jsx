import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Navbar from './components/Navbar'
import Login from './components/Login'
import PrivateRoute from './PrivateRoute/PrivateRoute'

function App() {
  return(
    <> <Navbar/>
  <Routes>
    <Route path="/" element={
      <Home/>
      }></Route>
    <Route path="/quiz" element={
            <PrivateRoute>

      <Quiz/>
      </PrivateRoute>
    }></Route>
    <Route path="/login" element={<Login/>}></Route>
  </Routes>
  </>
  )
}

export default App
