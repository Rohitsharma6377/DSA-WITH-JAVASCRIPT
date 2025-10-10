import React, { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Videoo from './pages/video/Videoo'
function App() {

  const[sidebar , setSidebar] = useState(true);

  return (
  <div>
    <Navbar  setSidebar={setSidebar}/>
<Routes>
  <Route path='/' element={<Home sidebar={sidebar}/>}/>
  <Route path='/video/:categoryId/:videoId' element={<Videoo/>}/>
</Routes>
  </div>
    
  )
}

export default App
