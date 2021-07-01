import React from 'react'
import Projects from 'components/sections/activity/projects/Projects'
import { Container, Grid } from '@material-ui/core'

// Background
import forestImage from 'assets/images/backgrounds/forest.jpg'

const Activity = () => {
  return <div
    style={{
      paddingTop: 100,
      paddingBottom: 100,
      minHeight: '100vh',
      backgroundImage: `url(${forestImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      overflow: 'hidden',
    }}>
    <Container
      maxWidth='lg'>
      <Grid container
        direction='row' spacing={4}>
        <Projects/>
      </Grid>
    </Container>
  </div>
}

export default Activity