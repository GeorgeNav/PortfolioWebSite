import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import shortid from 'shortid'
import Card from 'components/sections/activity/projects/categories/cards/card/Card'
import TYPES from 'utils/types'

const Cards = ({ projects }) => <Grid container
  justify='center'
  direction='row'
  spacing={4}>
  {projects.map((project) =>
    <Grid item
      key={shortid.generate()}
      style={{display: 'flex'}}>
      <Card
        project={project}/>
    </Grid>
  )}
</Grid>

Cards.propTypes = {
  projects: PropTypes.arrayOf(TYPES.PROJECT),
}

export default Cards