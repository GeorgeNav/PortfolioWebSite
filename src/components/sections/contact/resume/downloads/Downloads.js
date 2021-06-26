import React from 'react'
import PropTypes from 'prop-types'
import { Box, IconButton } from '@material-ui/core'

// Icons
import PDFFileIcon from 'assets/images/icons/pdf_file_icon.svg'
import DocFileIcon from 'assets/images/icons/doc_file_icon.svg'

const iconStyle = {
  width: 30,
  height: 30,
}

const Downloads = ({ pdfUrl, docUrl }) => {
  return <Box
    style={{
      position: 'absolute',
      top: 0,
      right: 0,
      margin: 0,
      zIndex: 1,
    }}>
    <IconButton
      disabled={!pdfUrl}
      href={pdfUrl}
      target='_blank'>
      <img
        src={PDFFileIcon}
        style={iconStyle}
        alt='PDF Icon'/>
    </IconButton>
    <IconButton
      disabled={!docUrl}
      href={docUrl}>
      <img
        src={DocFileIcon}
        style={iconStyle}
        alt='Word Document Icon'/>
    </IconButton>
  </Box>
}

Downloads.propTypes = {
  pdfUrl: PropTypes.string,
  docUrl: PropTypes.string,
}

export default Downloads