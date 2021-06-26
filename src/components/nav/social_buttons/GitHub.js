import React from 'react'
import PropTypes from 'prop-types'
import { IconButton } from '@material-ui/core'
import { GitHub } from '@material-ui/icons'

const GitHubButton = ({color = 'white'}) => {
  return <IconButton
    target='_blank'
    href='https://github.com/GeorgeNav'
    aria-label='GitHub URL'
    style={{color}}>
    <GitHub/>
  </IconButton>
}

GitHubButton.propTypes = {
  color: PropTypes.string,
}

export default GitHubButton
