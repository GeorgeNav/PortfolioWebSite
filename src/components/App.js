import React, { Fragment } from 'react'
import './App.css'

import NavBar from 'components/nav/NavBar'
import { Onboarding, Details, Projects } from 'components/sections'
import './App.css'

const App = () =>
  <Fragment>
    <NavBar/>
    <Onboarding/>
    <Projects/>
    <Details/>
  </Fragment>

export default App
