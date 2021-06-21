import React, { Fragment } from 'react'
import NavBar from 'components/nav/NavBar'
import { Space, Details, Projects } from 'components/sections'
import 'components/App.css'

const App = () =>
  <Fragment>
    <NavBar/>
    <Space/>
    <Projects/>
    <Details/>
  </Fragment>

export default App
