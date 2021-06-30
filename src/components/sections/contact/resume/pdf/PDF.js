import React from 'react'
import PropTypes from 'prop-types'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import './PDF.css'

const PDF = ({ pdfUrl }) => {
  return <Document
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