import React from 'react'
import PropTypes from 'prop-types'
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
import './PDF.css'

const PDF = ({ pdfUrl }) => {
  return pdfUrl && <Document
    file={pdfUrl}>
    <Page
      renderInteractiveForms={false}
      renderAnnotationLayer={false}
      renderTextLayer={false}
      pageNumber={1}/>
  </Document>
}

PDF.propTypes = {
  pdfUrl: PropTypes.string,
}

export default PDF