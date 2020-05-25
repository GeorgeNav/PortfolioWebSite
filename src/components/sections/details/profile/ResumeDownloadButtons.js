import React from 'react'
import { Button, ButtonGroup } from '@material-ui/core'

// Icons
import PDFFileIcon from '../../../assets/images/icons/pdf_file_icon.svg'
import DocFileIcon from '../../../assets/images/icons/doc_file_icon.svg'

// Hooks
import { useResumeURLs } from '../../../../hooks'

const iconStyle = {
  width: '30px',
  height: '40px',
}

const ResumeDownloadButtons = () => {
  const { loading, urls } = useResumeURLs()

  return <ButtonGroup
    style={{
      backgroundColor: 'azure',
    }}>
    <Button
      disabled={loading}
      href={urls.pdf}
      target='_blank'
      rel='noopener noreferrer'>
      <img
        src={PDFFileIcon}
        style={iconStyle}
        alt='PDF Icon'/>
    </Button>
    <Button
      disabled={loading}
      href={urls.doc}>
      <img
        src={DocFileIcon}
        style={iconStyle}
        alt='Word Document Icon'/>
    </Button>
  </ButtonGroup>
}

export default ResumeDownloadButtons