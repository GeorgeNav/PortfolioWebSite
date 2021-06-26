import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useViewportDimensions } from 'hooks'
import { Box } from '@material-ui/core'
import PDF from 'components/sections/contact/resume/pdf/PDF'
import Downloads from 'components/sections/contact/resume/downloads/Downloads'
import { fbStorage } from 'utils/database'

const scale = 0.8

const Resume = () => {
  const { width, height } = useViewportDimensions()
  const [resumeURLs, setResumeURLs] = useState({
    pdf: null,
    docx: null,
  })

  let docDims = {
    height: height * scale,
    width: height * scale * 0.71,
  }
  if(docDims.width > width)
    docDims = {
      height: docDims.height / 0.71,
      width,
    }
  
  useEffect(() => {
    const resumeName = 'GeorgeNavarroResume'

    const getURL = (extension) =>
      fbStorage.ref(`documents/resume/${resumeName}.${extension}`)
        .getDownloadURL()
        .then((url) => {
          // console.log(extension, 'url:', url)
          setResumeURLs((prevResumeURLs) => ({
            ...prevResumeURLs,
            [extension]: url,
          }))
        })
        .catch((error) => console.log(error))
    getURL('pdf')
    getURL('docx')
  }, [])
  
  return <Box
    style={{
      position: 'relative',
      width: docDims.width,
    }}>
    <Downloads
      docUrl={resumeURLs.docx}
      pdfUrl={resumeURLs.pdf}/>
    <PDF pdfUrl={resumeURLs.pdf}/>
  </Box>
}

Resume.propTypes = {
  pdfUrl: PropTypes.string,
}

export default Resume