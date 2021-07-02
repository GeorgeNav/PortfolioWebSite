import React, { Fragment } from 'react'
import NavBar from 'components/nav/NavBar'
import { Home, Contact, Activity, /* Experience */ } from 'components/sections'
import 'components/App.css'
import { useRoutes, Navigate } from 'react-router-dom'
import { SECTIONS } from 'utils/constants/sections'

const root = '/'

const App = () => {
  const element = useRoutes([
    {
      path: root + '*',
      element: <Navigate to={root + SECTIONS.HOME.KEY}/>,
    },
    {
      path: root + SECTIONS.HOME.KEY,
      element: <Home/>,
    },
    {
      path: root + SECTIONS.ACTIVITY.KEY,
      element: <Activity/>,
    },
    /* {
      path: root + SECTIONS.EXPERIENCE.KEY,
      element: <Experience/>,
    }, */
    {
      path: root + SECTIONS.CONTACT.KEY,
      element: <Contact/>,
    },
  ])

  return <Fragment>
    {element}
    <NavBar/>
  </Fragment>
}

export default App
