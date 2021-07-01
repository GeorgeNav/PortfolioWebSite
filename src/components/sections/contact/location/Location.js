import React from 'react'
import Map from 'components/sections/contact/location/map/Map'
import { Grid, Typography } from '@material-ui/core'

const Location = () => {
  return <Grid item container
    direction='row' spacing={4}
    justify='center' alignItems='stretch' alignContent='stretch'
    xs={12}
    style={{
      padding: 0,
    }}>
    <Grid item
      xs={12}>
      <Typography
        align='center'
        variant='h3'
        style={{
          userSelect: 'none'
        }}>
      My General Location
      </Typography>
    </Grid>
    <Grid item
      xs={12}>
      <Map/>
    </Grid>
  </Grid>
}
 
export default Location