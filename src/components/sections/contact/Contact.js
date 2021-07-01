import React from 'react'
import Resume from 'components/sections/contact/resume/Resume'
import Location from 'components/sections/contact/location/Location'

// Background
import lakeImage from 'assets/images/backgrounds/lake.jpg'

import { Container, Grid } from '@material-ui/core'
import EmailForm from './email_form/EmailForm'

const Contact = () => {
  return <div
    style={{
      minHeight: '100vh',
      backgroundImage: `url(${lakeImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      overflow: 'hidden',
    }}>
    <Container
      style={{
        paddingTop: 100,
        paddingBottom: 100,
      }}
      maxWidth='lg'>
      <Grid container
        direction='row' spacing={4}
        justify='center' alignItems='stretch' alignContent='stretch'
        style={{backdropFilter: 'blur(5px)'}}>
        <Grid item container
          direction='row' spacing={4}
          justify='center' alignItems='stretch' alignContent='stretch'
          xs={12} md={6}>
          <EmailForm/>
          <Location/>
        </Grid>
        <Resume/>
      </Grid>
    </Container>
  </div>
}

export default Contact