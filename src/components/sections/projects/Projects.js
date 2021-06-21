import React from 'react'
import Categories from 'components/sections/projects/categories/Categories'
import { Box, Grid, Typography } from '@material-ui/core'
import { useDeviceType } from 'hooks'

const About = () => {
  const deviceType = useDeviceType()

  return <Box
    style={{
      backgroundColor: 'lightgreen',
      padding: 20,
    }}>
    <Grid container
      justify='space-evenly'
      alignItems='center'
      direction={deviceType !== 'phone'
        ? 'row'
        : 'column'}>
      <Grid item
        style={{
          verticalAlign: 'middle',
        }}
        {...deviceType !== 'phone' ? {xs:6} : {}}>
        <Typography
          style={{
            userSelect: 'none',
            textAlign: 'center',
            padding: 20,
          }}
          variant='h2'>
          Projects
        </Typography>
      </Grid>
      <Grid item
        {...deviceType !== 'phone' ? {xs:6} : {}}>
        <Categories/>
      </Grid>
    </Grid>
  </Box>
}

export default About