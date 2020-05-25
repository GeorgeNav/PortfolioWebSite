import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import ParticleAnimation from '../../animations/ParticleAnimation'
import earthSvg from '../../../assets/images/artifacts/earth.svg'
import spacecraftSvg from '../../../assets/images/artifacts/spacecraft.svg'
import './earth.css'

// Hooks
import { useWindowDimensions } from '../../../hooks'

const Spacecraft = ({ rotationOrigin }) => {
  const { width, height } = useWindowDimensions()
  const spacecraftWidth = width * 0.1
  const spacecraftHeight = spacecraftWidth

  return <img
    src={spacecraftSvg}
    alt=''
    style={{
      position: 'absolute',
      width: spacecraftWidth,
      top: `${parseInt(height / 2) - parseInt(1.5 * spacecraftHeight)}px`,
      left: `${parseInt(width / 2) - parseInt(spacecraftWidth / 2)}px`,
    }}
  />
}

Spacecraft.propTypes = {
  rotationOrigin: PropTypes.exact({
    X: PropTypes.number.isRequired,
    Y: PropTypes.number.isRequired,
  }),
}

const Earth = ({ diameter, bottomYDelta }) => {
  return <img
    src={earthSvg}
    alt=''
    className='rotating'
    style={{
      position: 'relative',
      width: diameter,
      bottom: bottomYDelta,
      left: '-50%',
      margin: 'auto',
    }}/>
}

Earth.propTypes = {
  diameter: PropTypes.number.isRequired,
  bottomYDelta: PropTypes.number.isRequired,
}

const EarthAndSpacecraft = () => {
  const { width } = useWindowDimensions()
  const earthDiameter = width * 2
  const earthRadius = width

  const earthExtraYDelta = 20
  const earthBottomYDelta =
    earthRadius -
    Math.sqrt(
      earthRadius**2 -
      (width / 2)**2
    ) +
    earthExtraYDelta

  const rotationOrigin = {
    X: width / 2,
    Y: earthRadius - earthBottomYDelta,
  }

  return <Fragment>
    <Spacecraft
      rotationOrigin={rotationOrigin}/>
    <Earth
      diameter={earthDiameter}
      bottomYDelta={earthBottomYDelta}/>
  </Fragment>
}

const Home = () => {

  return <div
    style={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
      overflow: 'none',
    }}>
    <ParticleAnimation/>
    <EarthAndSpacecraft/>
  </div>
}

export default Home
