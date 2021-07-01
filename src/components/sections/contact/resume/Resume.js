import React, { useEffect, useState } from 'react'
import PDF from 'components/sections/contact/resume/pdf/PDF'
import { fbStorage } from 'utils/database'
import { Grid, Paper, Typography } from '@material-ui/core'

// Icons
import PDFFileIcon from 'assets/images/icons/pdf_file_icon.svg'
import DocFileIcon from 'assets/images/icons/doc_file_icon.svg'
import FileDownloadButton from 'components/sections/contact/resume/file_download_button/FileDownloadButton'

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
  
  return <Grid item
    xs={12} md={6}>
    <Paper
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        overflow: 'hidden',
      }}>
      <Grid container
        style={{
          paddingLeft: 15,
        }}
        justify='space-between' alignItems='center' alignContent='center'
        wrap='nowrap'>
        <Grid item
          xs={1}>
          <Typography
            style={{
              fontFamily: 'Yesteryear',
              userSelect: 'none',
            }}
            variant='h4'>
            {'Resume'}
          </Typography>
        </Grid>
        <Grid item>
          <FileDownloadButton
            url={resumeURLs.docx}
            icon={DocFileIcon}/>
          <FileDownloadButton
            url={resumeURLs.pdf}
            icon={PDFFileIcon}/>
        </Grid>
      </Grid>
      <PDF
        pdfUrl={resumeURLs.pdf}/>
    </Paper>
  </Grid>
}

export default Resume