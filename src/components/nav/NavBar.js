import React from 'react'
import { AppBar, Toolbar, IconButton, ButtonGroup } from '@material-ui/core'
import { Menu, GitHub, LinkedIn } from '@material-ui/icons'

const gitHubURL = 'https://github.com/GeorgeNav'
const linkedInURL = 'https://www.linkedin.com/in/george-navarro-b368b0154'

const navBarButtonColor = 'white'

const HamburgerButton = () =>
  <IconButton
    aria-label='Menu'>
    <Menu
      style={{color: navBarButtonColor}}/>
  </IconButton>

/* const TitleButton = () =>
  <Typography
    style={{
      color: navBarButtonColor,
    }}>
    George Navarro
  </Typography> */

const GitHubButton = () => 
  <IconButton
    target='_blank'
    href={gitHubURL}
    aria-label='GitHub URL'>
    <GitHub
      edge='end'
      style={{color: navBarButtonColor}}/>
  </IconButton>

const LinkedInButton = () =>
  <IconButton
    target='_blank'
    href={linkedInURL}
    aria-label='LinkedIn URL'>
    <LinkedIn
      style={{color: navBarButtonColor}}/>
  </IconButton>

const NavBar = () => {
  return <AppBar
    color='transparent'
    position='fixed'
    elevation={0}>
    <Toolbar
      style={{
        justifyContent: 'space-between',
        verticalAlign: 'center',
      }}>
      <ButtonGroup>
        <HamburgerButton/>
      </ButtonGroup>
      <ButtonGroup>
        <GitHubButton/>
        <LinkedInButton/>
      </ButtonGroup>
    </Toolbar>
  </AppBar>
}

export default NavBar
