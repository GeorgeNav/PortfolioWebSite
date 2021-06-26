import React from 'react'
import { IconButton } from '@material-ui/core'
import { GitHub } from '@material-ui/icons'

const GitHubButton = () => {
  return <IconButton
    target='_blank'
    href='https://github.com/GeorgeNav'
    aria-label='GitHub URL'
    style={{color: 'white'}}>
    <GitHub/>
  </IconButton>
}

export default GitHubButton
