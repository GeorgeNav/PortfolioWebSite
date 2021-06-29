import React from 'react'
import PropTypes from 'prop-types'

const PDF = ({ pdfUrl }) => {
  return <object
    style={{
      height: '100%',
      minHeight: 400,
    }}
    data={pdfUrl + '#toolbar=0&navpanes=0&scrollbar=0'}
    width='100%'
    height='100%'
    type='application/pdf'>
    <iframe
      src={`http://docs.google.com/gview?embedded=true&url=${pdfUrl}&amp;embedded=true`} height='100%' style={{minHeight: 400}}/>
  </object>
}

PDF.propTypes = {
  pdfUrl: PropTypes.string,
  parentDims: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
}

export default PDF