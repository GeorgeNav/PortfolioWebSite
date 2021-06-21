import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import shortid from 'shortid'
import { ProjectCard } from 'components/sections/about/project_categories/project_cards/project_card'
import TYPES from 'utils/types'

const ProjectCards = ({ projects }) => <Grid container
  justify='center'
  direction='row'
  spacing={4}>
  {projects.map((project) =>
    <Grid item
      key={shortid.generate()}
      style={{display: 'flex'}}>
      <ProjectCard
        project={project}/>
    </Grid>
  )}
</Grid>

ProjectCards.propTypes = {
  projects: PropTypes.arrayOf(TYPES.PROJECT),
}

export default ProjectCards