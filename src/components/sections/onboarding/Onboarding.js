import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import ParticleAnimation from './ParticleAnimation'
import earthSvg from '../../../assets/images/artifacts/earth.svg'
import spacecraftSvg from '../../../assets/images/artifacts/spacecraft.svg'
import moonPng from '../../../assets/images/artifacts/moon.png'
import './earth.css'

// Hooks
import { useViewportDimensions } from '../../../hooks'

const Moon = () => {
  const { width, height } = useViewportDimensions()
  const moonWidth = width * 0.05

  return <img
    src={moonPng}
    alt='Moon'
    style={{
      position: 'absolute',
      width: moonWidth,
      minWidth: 50,
      top: `${parseInt(height / 6)}px`,
      left: `${parseInt(width / 6)}px`,
      transform: 'rotate(-90deg)',
    }}
  />
}

const Spacecraft = ({ earthBottomYDelta }) => {
  const { width, height } = useViewportDimensions()
  const spacecraftWidth = width * 0.1 // Width from left to right when facing up
  const spacecraftHeight = spacecraftWidth // Width from top to bottom when facing down

  return <img
    src={spacecraftSvg}
    alt='Spacecraft'
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
  const { height } = useViewportDimensions()

  return <img
    src={earthSvg}
    alt='Earth'
    className='rotating'
    style={{
      position: 'absolute',
      pointerEvents: 'none',
      width: diameter,
      top: height - bottomYDelta,
      left: '-50%',
      margin: 'auto',
    }}/>
}

Earth.propTypes = {
  diameter: PropTypes.number.isRequired,
  bottomYDelta: PropTypes.number.isRequired,
}

const EarthAndSpacecraft = () => { // HELP: https://www.youtube.com/watch?v=RygpvV9YHqU
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
    <Moon/>
    <Earth
      diameter={earthDiameter}
      bottomYDelta={earthBottomYDelta}/>
    <Spacecraft
      earthBottomYDelta={earthBottomYDelta}/>
  </Fragment>
}

const Onboarding = () => {
  const { width, height } = useViewportDimensions()

  return <div
    style={{
      position: 'relative',
      width,
      height: height * 1.5,
      overflow: 'hidden',
    }}>
    <ParticleAnimation/>
    <EarthAndSpacecraft/>
  </div>
}

export default Onboarding
