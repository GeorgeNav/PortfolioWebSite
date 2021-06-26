import React from 'react'
import PropTypes from 'prop-types'
import spacecraftSvg from 'assets/images/artifacts/spacecraft.svg'
import fireGif from 'assets/gifs/fire.gif'

// Hooks
import { useDeviceType, useViewportDimensions } from 'hooks'

const Spacecraft = ({ dimensions }) => {
  const deviceType = useDeviceType()
  const { width, height } = useViewportDimensions()

  const Body = () => <img
    src={spacecraftSvg}
    alt='Spacecraft Body'
    style={{
      transform: 'rotate(-90deg)',
      minWidth: 100,
      width: dimensions.width,
    }}
  />

  const ThrusterFire = () => <img
    src={fireGif}
    style={{
      position: 'absolute',
      transform: 'rotate(90deg)',
      minWidth: 100,
      width: dimensions.width,
    }}
    alt='Spacecraft Thruster Fire'
  />

  return <div
    style={{
      position: 'absolute',
      top: `${parseInt(deviceType === 'phone' ? height * 4/5 : height * 3/5)}px`,
      left: `${parseInt(width/2)}px`,
      transform: 'translate(-50%, -50%)',
    }}>
    <Body/>
    <ThrusterFire/>
  </div>
}

Spacecraft.propTypes = {
  dimensions: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
}

export default Spacecraft
