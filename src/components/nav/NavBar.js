import React from 'react'
import { useLocation } from 'react-router-dom'
import { AppBar, Toolbar, ButtonGroup, Breadcrumbs, Link } from '@material-ui/core'
import { GitHub, LinkedIn } from 'components/nav/social_buttons'
import shortid from 'shortid'
import { SECTIONS } from 'utils/constants/sections'

const NavBar = () => {
  const path = useLocation()

  const colors = path.pathname === '/' + SECTIONS.HOME.KEY
    ? {
      inActive: 'gray',
      active: 'white',
    }
    : {
      inActive: 'gray',
      active: 'lightgray',
    }

  return <AppBar
    position='fixed' // absolute
    color='transparent'
    style={{
      // for top nav bar
      top: 0,
      // for bottom nav bar
      // top: 'auto',
      // bottom: 0,
    }}
    elevation={0}>
    <Toolbar
      style={{
        flexGrow: 1,
        alignContent: 'center',
        justifyContent: 'space-between',
      }}>
      <Breadcrumbs
        style={{color: colors.active}}>
        {Object.values(SECTIONS).map((section) =>
          <Link
            key={shortid.generate()}
            href={'/' + section.KEY}
            style={{
              color: !path.pathname.includes(section.KEY) ? colors.inActive : colors.active,
              textDecoration: 'none',
            }}>
            {section.NAME}
          </Link>)}
      </Breadcrumbs>
      <ButtonGroup>
        <GitHub color={colors.active}/>
        <LinkedIn color={colors.active}/>
      </ButtonGroup>
    </Toolbar>
  </AppBar>
}

export default NavBar
