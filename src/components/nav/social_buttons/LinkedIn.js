import React from 'react'
import { IconButton } from '@material-ui/core'
import { LinkedIn } from '@material-ui/icons'

const LinkedInButton = () => {
  return <IconButton
    target='_blank'
    href='https://www.linkedin.com/in/george-navarro-b368b0154'
    aria-label='LinkedIn URL'
    style={{color: 'white'}}>
    <LinkedIn/>
  </IconButton>
}

export default LinkedInButton
