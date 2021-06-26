import React, { Fragment } from 'react'
import NavBar from 'components/nav/NavBar'
import { Space, Contact, Activity, /* Experience */ } from 'components/sections'
import 'components/App.css'
import { useRoutes } from 'react-router-dom'
import { SECTIONS } from 'utils/constants/sections'

const root = '/'

const App = () => {
  const element = useRoutes([
    {
      path: root,
      element: <Space/>,
      children: [],
    },
    {
      path: root + `${SECTIONS.ACTIVITY.KEY}`,
      element: <Activity/>,
    },
    /* {
      path: root + `${SECTIONS.EXPERIENCE.KEY}`,
      element: <Experience/>,
    }, */
    {
      path: root + `${SECTIONS.CONTACT.KEY}`,
      element: <Contact/>,
    },
  ])

  return <Fragment>
    {element}
    <NavBar/>
  </Fragment>
}

export default App
