import React from 'react'
import './App.css'

import NavBar from './nav/NavBar'
import { Home, Details } from './sections'
import { Box } from '@material-ui/core'

const App = () =>
  <Box
    style={{
      width: '100vw',
      height: '100vh',
    }}
  >
    <NavBar/>
    <Home/>
    <Details/>
  </Box>

export default App
