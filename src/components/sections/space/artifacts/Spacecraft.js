import React from 'react'
import PropTypes from 'prop-types'
import spacecraftSvg from 'assets/images/artifacts/spacecraft.svg'
import fireGif from 'assets/gifs/fire.gif'

// Hooks
import { useViewportDimensions } from 'hooks'

const Spacecraft = ({ dimensions, bottomYDelta }) => {
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
      top: `${parseInt(height/2 - dimensions.width/2 - bottomYDelta/2)}px`,
      left: `${parseInt(width/2 - dimensions.height/2)}px`,
    }}>
    <Body/>
    <ThrusterFire/>
  </div>
}

Spacecraft.propTypes = {
  bottomYDelta: PropTypes.number.isRequired,
  dimensions: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
}

export default Spacecraft
