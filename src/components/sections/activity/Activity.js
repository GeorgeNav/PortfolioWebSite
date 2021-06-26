import React from 'react'
import Projects from 'components/sections/activity/projects/Projects'
import { Box } from '@material-ui/core'

const Activity = () => {
  return <Box
    style={{
      minHeight: '100vh',
    }}>
    <Projects/>
  </Box>
}

export default Activity