import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import Pdf from '@mikecousins/react-pdf'
import './PDF.css'

const PDF = ({ pdfUrl }) => {
  const canvasRef = useRef()

  useEffect(() => {
    canvasRef.current.style.width = '100%'
    canvasRef.current.style.height = '100%'
  }, [])
  
  return <Pdf
    ref={canvasRef}
    className='pdf'
    file={pdfUrl}
    page={1}/>
}

PDF.propTypes = {
  pdfUrl: PropTypes.string,
}

export default PDF