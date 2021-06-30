import React from 'react'
import PropTypes from 'prop-types'
import { IconButton } from '@material-ui/core'

const iconStyle = {
  width: 30,
  height: 30,
}

const FileDownloadButton = ({ url, icon }) => {
  return <IconButton
    disabled={!url}
    href={url}
    target='_blank'>
    <img
      src={icon}
      style={iconStyle}/>
  </IconButton>
}

FileDownloadButton.propTypes = {
  url: PropTypes.string,
  icon: PropTypes.any,
}

export default FileDownloadButton