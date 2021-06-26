import React from 'react'
import PropTypes from 'prop-types'
import earthSvg from 'assets/images/artifacts/earth.svg'
import './earth.css'

// Hooks
import { useDeviceType, useViewportDimensions } from 'hooks'

const Earth = ({ dimensions, bottomYDelta }) => {
  const deviceType = useDeviceType()
  const { height } = useViewportDimensions()

  const extraYDelta = deviceType !== 'phone' ? 0 : 200

  return <img
    src={earthSvg}
    alt='Earth'
    className='rotating'
    style={{
      position: 'absolute',
      pointerEvents: 'none',
      width: dimensions.diameter,
      top: height - bottomYDelta - extraYDelta,
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
