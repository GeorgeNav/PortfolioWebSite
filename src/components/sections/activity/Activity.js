import React from 'react'
import Projects from 'components/sections/activity/projects/Projects'
import { Container } from '@material-ui/core'

// Background
import forestImage from 'assets/images/backgrounds/forest.jpg'

const Activity = () => {
  return <div
    style={{
      minHeight: '100vh',
      backgroundImage: `url(${forestImage})`,
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
      maxWidth='xl'>
      <Projects/>
    </Container>
  </div>
}

export default Activity