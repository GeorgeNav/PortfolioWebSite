import React from 'react'
import './App.css'

import NavBar from 'components/nav/NavBar'
import { Onboarding, Details, About } from 'components/sections'

const App = () =>
  <div
    style={{
      width: '100vw',
      height: '100vh',
      overflowX: 'hidden',
    }}
  >
    <NavBar/>
    <Onboarding/>
    <About/>
    <Details/>
  </div>

export default App
