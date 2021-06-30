import React from 'react'
import Categories from 'components/sections/activity/projects/categories/Categories'
import { Grid, Typography } from '@material-ui/core'
import { useDeviceType } from 'hooks'

const About = () => {
  const deviceType = useDeviceType()

  return <Grid container
    justify='space-evenly'
    alignItems='center'
    direction={deviceType === 'desktop'
      ? 'row'
      : 'column'}>
    <Grid item
      style={{
        verticalAlign: 'middle',
      }}
      {...deviceType === 'desktop' ? {xs:6} : {}}>
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
      style={{
        width: '100%',
      }}
      {...deviceType === 'desktop' ? {xs:6} : {}}>
      <Categories/>
    </Grid>
  </Grid>
}

export default About