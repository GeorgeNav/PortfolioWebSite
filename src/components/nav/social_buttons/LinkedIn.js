import React from 'react'
import PropTypes from 'prop-types'
import { IconButton } from '@material-ui/core'
import { LinkedIn } from '@material-ui/icons'

const LinkedInButton = ({color = 'white'}) => {
  return <IconButton
    target='_blank'
    href='https://www.linkedin.com/in/george-navarro-b368b0154'
    aria-label='LinkedIn URL'
    style={{color}}>
    <LinkedIn/>
  </IconButton>
}

LinkedInButton.propTypes = {
  color: PropTypes.string,
}

export default LinkedInButton
