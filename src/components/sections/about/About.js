import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import { useViewportDimensions } from 'hooks'
import { ProjectCard } from './project'
import { PROJECTS } from 'utils/projects'
import shortid from 'shortid'

const About = () => {
  const { width, height } = useViewportDimensions()

  return <Container
    elevation={20}
    style={{
      width,
      minHeight: height,
    }}>
    <Typography
      align='center'
      variant='h4'
      style={{
        marginTop: 50,
        marginBottom: 50,
      }}>
      Projects
    </Typography>
    <Grid container
      justify='center'
      direction='row'
      alignItems='stretch'
      spacing={4}>
      {Object.values(PROJECTS).map((project) =>
        <Grid item
          style={{display: 'flex'}}
          key={shortid.generate()}>
          <ProjectCard
            project={project}/>
        </Grid>
      )}
    </Grid>
  </Container>
}

export default About
