import React from 'react'
import { Grid } from '@material-ui/core'
import shortid from 'shortid'
import { ProjectCard } from '../project_card'

const ProjectCards = ({ projects }) => <Grid container
  justify='center'
  direction='row'
  spacing={2}>
  {Object.values(projects).map((project) =>
    <Grid item
      key={shortid.generate()}
      style={{display: 'flex'}}>
      <ProjectCard
        project={project}/>
    </Grid>
  )}
</Grid>

export default ProjectCards