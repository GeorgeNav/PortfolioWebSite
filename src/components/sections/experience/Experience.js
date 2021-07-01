import React from 'react'
import { Container, Grid } from '@material-ui/core'
import JobTimeline from 'components/sections/experience/job_timeline/JobTimeline'

import spaceImage from 'assets/images/backgrounds/space.jpg'

const Experience = () => {
  return <div
    style={{
      paddingTop: 100,
      paddingBottom: 100,
      minHeight: '100vh',
      backgroundImage: `url(${spaceImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      overflow: 'hidden',
    }}>
    <Container
      maxWidth='lg'>
      <Grid container
        direction='row' spacing={4}>
        <Grid container
          direction='row'
          justify='center' alignItems='center'>
          <JobTimeline/>
        </Grid>
      </Grid>
    </Container>
  </div>
}

export default Experience
