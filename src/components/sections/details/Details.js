import React, { useEffect, useState, Fragment } from 'react'

import { fbStorage } from 'utils/database'

// Background
import lakeImage from 'assets/images/backgrounds/lake.jpg'

// Icons
import PDFFileIcon from 'assets/images/icons/pdf_file_icon.svg'
import DocFileIcon from 'assets/images/icons/doc_file_icon.svg'

import { Card, IconButton, CardHeader, CardContent } from '@material-ui/core'
import { useViewportDimensions } from 'hooks'

import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const iconStyle = {
  width: 30,
  height: 30,
}

const Details = () => {
  const { width, height } = useViewportDimensions()
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
          console.log(extension, 'url:', url)
          setResumeURLs((prevResumeURLs) => ({
            ...prevResumeURLs,
            [extension]: url,
          }))
        })
        .catch((error) => console.log(error))
    getURL('pdf')
    getURL('docx')
  }, [])

  const scale = 0.8
  let docDims = {
    height: height * scale,
    width: height * scale * 0.71,
  }
  if(docDims.width > width)
    docDims = {
      height: docDims.height / 0.71,
      width,
    }

  return <div
    style={{
      width: '100vw',
      height: '100vh',
      backgroundImage: `url(${lakeImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}>
    <Card
      style={{
        width: docDims.width,
        position: 'relative',
        top: '50%',
        margin: 'auto',
        transform: 'translateY(-50%)',
      }}>
      <CardHeader
        action={
          <Fragment>
            <IconButton
              disabled={!resumeURLs.pdf}
              href={resumeURLs.pdf}
              target='_blank'>
              <img
                src={PDFFileIcon}
                style={iconStyle}
                alt='PDF Icon'/>
            </IconButton>
            <IconButton
              disabled={!resumeURLs.docx}
              href={resumeURLs.docx}>
              <img
                src={DocFileIcon}
                style={iconStyle}
                alt='Word Document Icon'/>
            </IconButton>
          </Fragment>
        }/>
      <CardContent>
        <Document
          file={resumeURLs.pdf}>
          <Page
            renderAnnotationLayer={false}
            {...docDims}
            pageNumber={1}/>
        </Document>
      </CardContent>
    </Card>
  </div>
}

export default Details