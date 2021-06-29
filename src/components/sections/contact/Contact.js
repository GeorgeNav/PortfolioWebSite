import React, { useRef } from 'react'
import Resume from 'components/sections/contact/resume/Resume'
import Location from 'components/sections/contact/location/Location'

// Background
import lakeImage from 'assets/images/backgrounds/lake.jpg'

import { Container, Grid } from '@material-ui/core'
import Form from 'components/sections/contact/form/Form'

const Contact = () => {
  const pdfRef = useRef()

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
        direction='row'
        alignItems='stretch'
        justify='center'
        spacing={4}>
        <Grid item
          ref={pdfRef}
          xs={12}
          md={6}
          style={{
            position: 'relative',
            objectFit: 'cover',
            overflow: 'hidden',
          }}>
          <Resume/>
        </Grid>
        <Grid item container
          direction='row'
          alignItems='stretch'
          alignContent='stretch'
          justify='center'
          spacing={4}
          xs={12}
          md={6}>
          <Grid item
            xs={12}>
            <Form/>
          </Grid>
          <Grid item
            xs={12}>
            <Location/>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </div>
}

export default Contact