import React from 'react'
import { Typography, Paper } from '@material-ui/core'
import { useViewportDimensions } from 'hooks'
import shortid from 'shortid'

// Images
import cloudPng from 'assets/images/artifacts/clouds.png'

// CSS
import './cloud.css'

const numClouds = 200
const cloudWidth = 100

const About = () => {
  const { width } = useViewportDimensions()

  const cloudCoords = React.useState(
    Array.apply(null, { length: numClouds }).map(() => ({
      x: parseInt(Math.random() * width + 10) - 20,
      y: parseInt(Math.random() * 100) - 100,
    }))
  )[0]

  const lineCoverCoords = Array.from(Array(parseInt(width / cloudWidth * 1.25)).keys()).map(n => n - 1).map((n) => ({
    x: parseInt(n * cloudWidth / 2),
    y: parseInt(Math.random() * 50) - 50,
  }))

  return <div
    style={{
      position: 'relative',
    }}>
    {[...cloudCoords, ...lineCoverCoords].map((coord) =>
      <img
        src={cloudPng}
        key={shortid.generate()}
        className='cloudGrow'
        alt='Cloud'
        style={{
          position: 'absolute',
          //pointerEvents: 'none',
          left: coord.x,
          top: coord.y,
          width: cloudWidth,
        }}/>)}
    <Paper>
      <Typography>Hi</Typography>
      <Typography>Hi</Typography>
      <Typography>Hi</Typography>
      <Typography>Hi</Typography>
      <Typography>Hi</Typography>
      <Typography>Hi</Typography>
      <Typography>Hi</Typography>
      <Typography>Hi</Typography>
      <Typography>Hi</Typography>
      <Typography>Hi</Typography>
      <Typography>Hi</Typography>
      <Typography>Hi</Typography>
      <Typography>Hi</Typography>
      <Typography>Hi</Typography>
      <Typography>Hi</Typography>
      <Typography>Hi</Typography>
      <Typography>Hi</Typography>
      <Typography>Hi</Typography>
      <Typography>Hi</Typography>
      <Typography>Hi</Typography>
      <Typography>Hi</Typography>
    </Paper>
  </div>
}

export default About
