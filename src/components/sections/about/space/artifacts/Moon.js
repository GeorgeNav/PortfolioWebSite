import React from 'react'
import moonPng from 'assets/images/artifacts/moon.png'

// Hooks
import { useViewportDimensions } from 'hooks'

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

export default Moon
