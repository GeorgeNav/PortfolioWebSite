import React, { useEffect, useState, Fragment } from 'react'
import PDF from 'components/sections/contact/resume/pdf/PDF'
import Downloads from 'components/sections/contact/resume/downloads/Downloads'
import { fbStorage } from 'utils/database'

const Resume = () => {
  const [resumeURLs, setResumeURLs] = useState({
    pdf: null,
    docx: null,
  })

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
  
  return <Fragment>
    <Downloads
      style={{
        position: 'absolute',
        right: 40,
        bottom: 20,
        zIndex: 1,
      }}
      docUrl={resumeURLs.docx}
      pdfUrl={resumeURLs.pdf}/>
    {resumeURLs.pdf && <PDF
      pdfUrl={resumeURLs.pdf}/>}
  </Fragment>
}

export default Resume