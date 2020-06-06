import React from 'react'

// Hooks
import { useViewportDimensions } from 'hooks'

import {
  Earth,
  Moon,
  Spacecraft,
} from 'components/sections/onboarding/artifacts'
import ParticleAnimation from 'components/sections/onboarding/background/ParticleAnimation'

const Onboarding = () => {
  const { width, height } = useViewportDimensions()
  const earthDim = {
    diameter: width * 2,
    radius: width,
  }

  const extraYDelta = 10
  const earthBottomYDelta =
    earthDim.radius -
    Math.sqrt(
      earthDim.radius**2 -
      (width / 2)**2
    ) + extraYDelta

  const spacecraftSize = width * 0.1
  const spacecraftDim = {
    width: spacecraftSize,
    height: spacecraftSize,
  }

  return <div
    style={{
      position: 'relative',
      width,
      height: height * 1.5,
      overflow: 'hidden',
    }}>
    <ParticleAnimation/>
    <Moon/>
    <Earth
      dimensions={earthDim}
      bottomYDelta={earthBottomYDelta}/>
    <Spacecraft
      dimensions={spacecraftDim}
      bottomYDelta={earthBottomYDelta}/>
  </div>
}

export default Onboarding
