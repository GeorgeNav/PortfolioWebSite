import React from 'react'
import './App.css'

import NavBar from './nav/NavBar'
import { Onboarding, Details, About } from './sections'

const App = () =>
  <div
    style={{
      width: '100vw',
      height: '100vh',
    }}
  >
    <NavBar/>
    <Onboarding/>
    <About/>
    <Details/>
  </div>

export default App
