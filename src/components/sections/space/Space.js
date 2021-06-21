import React from 'react'

// Hooks
import { useViewportDimensions } from 'hooks'

import {
  Earth,
  Moon,
  Spacecraft,
} from 'components/sections/space/artifacts'
import Background from 'components/sections/space/background/Background'

const Space = () => {
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
      height: height * 1.25,
      overflow: 'hidden',
      backgroundColor: 'black',
    }}>
    <Background/>
    <Moon/>
    <Earth
      dimensions={earthDim}
      bottomYDelta={earthBottomYDelta}/>
    <Spacecraft
      dimensions={spacecraftDim}
      bottomYDelta={earthBottomYDelta}/>
  </div>
}

export default Space
