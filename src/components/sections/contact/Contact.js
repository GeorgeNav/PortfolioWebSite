import React from 'react'
import Resume from 'components/sections/contact/resume/Resume'

// Background
import lakeImage from 'assets/images/backgrounds/lake.jpg'

import { Grid } from '@material-ui/core'

const Details = () => {
  return <Grid container
    spacing={0}
    direction='column'
    alignItems='center'
    justify='center'
    style={{
      width: '100vw',
      height: '100vh',
      backgroundImage: `url(${lakeImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}>
    <Grid item>
      <Resume/>
    </Grid>
  </Grid>
}

export default Details