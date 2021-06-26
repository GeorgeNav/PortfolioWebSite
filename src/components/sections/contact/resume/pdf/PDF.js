import React from 'react'
import PropTypes from 'prop-types'
import { useViewportDimensions } from 'hooks'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const scale = 0.8

const PDF = ({ pdfUrl }) => {
  const { width, height } = useViewportDimensions()
  let docDims = {
    height: height * scale,
    width: height * scale * 0.71,
  }
  if(docDims.width > width)
    docDims = {
      height: docDims.height / 0.71,
      width,
    }
  
  return pdfUrl && <Document
    file={pdfUrl}>
    <Page
      renderAnnotationLayer={false}
      {...docDims}
      pageNumber={1}/>
  </Document>
}

PDF.propTypes = {
  pdfUrl: PropTypes.string,
}

export default PDF