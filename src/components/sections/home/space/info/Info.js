import React from 'react'
import { Box, Typography } from '@material-ui/core'

import { useDeviceType, useViewportDimensions } from 'hooks'

const Info = () => {
  const deviceType = useDeviceType()
  const { height } = useViewportDimensions()

  return <Box
    style={{
      position: 'absolute',
      pointerEvents: 'none',
      top: `${parseInt(deviceType === 'phone' ? height * 1/2 : height * 1/3)}px`,
      left: '50vw',
      transform: 'translate(-50%, -50%)',
      zIndex: 1,
      color: 'white',
    }}>
    <Typography
      variant='h1'
      align='center'
      style={{
        fontFamily: 'Yesteryear',
      }}>
      George Navarro
    </Typography>
    <Typography
      variant='h3'
      align='center'>
      A full stack developer
    </Typography>
  </Box>
}
 
export default Info