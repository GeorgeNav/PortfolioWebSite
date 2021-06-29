import React, { Fragment } from 'react'

// Hooks
import { useViewportDimensions } from 'hooks'

import {
  Earth,
  Moon,
  Spacecraft,
} from 'components/sections/home/space/artifacts'
import Background from 'components/sections/home/space/background/Background'

const Space = () => {
  const { width } = useViewportDimensions()
  const earthDim = {
    diameter: width * 2,
    radius: width,
  }

  const extraYDelta = 0
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

  return <Fragment>
    <Background/>
    <Moon/>
    <Earth
      dimensions={earthDim}
      bottomYDelta={earthBottomYDelta}/>
    <Spacecraft
      dimensions={spacecraftDim}
      bottomYDelta={earthBottomYDelta}/>
  </Fragment>
}

export default Space
