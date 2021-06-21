import React, { Fragment } from 'react'
import NavBar from 'components/nav/NavBar'
import { Space, Details, About } from 'components/sections'
import 'components/App.css'

const App = () =>
  <Fragment>
    <NavBar/>
    <Space/>
    <About/>
    <Details/>
  </Fragment>

export default App
