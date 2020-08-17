import React from 'react'
import { AppBar, Toolbar, IconButton, ButtonGroup, Typography, makeStyles } from '@material-ui/core'
import { GitHub, LinkedIn } from '@material-ui/icons'

const gitHubURL = 'https://github.com/GeorgeNav'
const linkedInURL = 'https://www.linkedin.com/in/george-navarro-b368b0154'

const color = 'white'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    alignContent: 'center',
    justifyContent: 'space-between'
  },
  title: {
    color,
    flexGrow: 1,
    verticalAlign: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    color,
  },
})

const TitleButton = () => {
  const { title } = useStyles()

  return <Typography className={title} variant='h6'>
    George Navarro
  </Typography>
}

const GitHubButton = () => {
  const { button } = useStyles()

  return <IconButton
    target='_blank'
    href={gitHubURL}
    aria-label='GitHub URL'
    className={button}>
    <GitHub/>
  </IconButton>
}

const LinkedInButton = () => {
  const { button } = useStyles()

  return <IconButton
    target='_blank'
    href={linkedInURL}
    aria-label='LinkedIn URL'
    className={button}>
    <LinkedIn/>
  </IconButton>
}

const NavBar = () => {
  const { root } = useStyles()

  return <AppBar
    color='transparent'
    position='fixed'
    elevation={0}>
    <Toolbar
      className={root}>
      <TitleButton/>
      <ButtonGroup>
        <GitHubButton/>
        <LinkedInButton/>
      </ButtonGroup>
    </Toolbar>
  </AppBar>
}

export default NavBar
