import React from 'react'
import './App.css'

import NavBar from './nav/NavBar'
import { Home, Details } from './sections'

const App = () =>
  <div
    style={{
      width: '100vw',
      height: '100vh',
    }}
  >
    <NavBar/>
    <Home/>
    <Details/>
  </div>

export default App
