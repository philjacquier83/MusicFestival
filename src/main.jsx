import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Program from './pages/program'
import Artists from './pages/artists'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program/:id" element={<Program />} />
        <Route path="/artists/:id" element={<Artists />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
