import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import ParticleAnimation from './ParticleAnimation'
import earthSvg from '../../../assets/images/artifacts/earth.svg'
import spacecraftSvg from '../../../assets/images/artifacts/spacecraft.svg'
import './earth.css'

// Hooks
import { useViewportDimensions } from '../../../hooks'

const Spacecraft = ({ earthBottomYDelta }) => {
  const { width, height } = useViewportDimensions()
  const spacecraftWidth = width * 0.1 // Width from left to right when facing up
  const spacecraftHeight = spacecraftWidth // Width from top to bottom when facing down

  return <img
    src={spacecraftSvg}
    alt=''
    style={{
      position: 'absolute',
      width: spacecraftWidth,
      minWidth: 100,
      top: `${parseInt(height / 2 - spacecraftWidth / 2 - earthBottomYDelta / 2)}px`,
      left: `${parseInt(width / 2) - parseInt(spacecraftHeight / 2)}px`,
      transform: 'rotate(-90deg)',
    }}
  />
}

Spacecraft.propTypes = {
  earthBottomYDelta: PropTypes.number.isRequired,
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
  const { width } = useViewportDimensions()
  const earthDiameter = width * 2
  const earthRadius = width

  const extraYDelta = 10
  const earthBottomYDelta =
    earthRadius -
    Math.sqrt(
      earthRadius**2 -
      (width / 2)**2
    ) + extraYDelta

  return <Fragment>
    <Spacecraft
      earthBottomYDelta={earthBottomYDelta}/>
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
