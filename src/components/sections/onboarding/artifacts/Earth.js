import React from 'react'
import PropTypes from 'prop-types'
import earthSvg from 'assets/images/artifacts/earth.svg'
import './earth.css'

// Hooks
import { useViewportDimensions } from 'hooks'

const Earth = ({ dimensions, bottomYDelta }) => {
  const { height } = useViewportDimensions()

  return <img
    src={earthSvg}
    alt='Earth'
    className='rotating'
    style={{
      position: 'absolute',
      pointerEvents: 'none',
      width: dimensions.diameter,
      top: height - bottomYDelta,
      left: '-50%',
      margin: 'auto',
    }}/>
}

Earth.propTypes = {
  dimensions: PropTypes.shape({
    diameter: PropTypes.number.isRequired,
    radius: PropTypes.number.isRequired,
  }).isRequired,
  bottomYDelta: PropTypes.number.isRequired,
}

export default Earth
