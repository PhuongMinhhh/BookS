import { useState } from 'react'

import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import NFooter from './components/NFooter'
function App() {

  return (
   
      <>
      <Navbar/>
      <Outlet />
      <NFooter/>
      </>
    
  )
}

export default App
