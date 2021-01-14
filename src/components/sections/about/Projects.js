import React from 'react'
import { Grid, Typography, Paper, Box } from '@material-ui/core'
import { PROJECTS } from 'utils/projects'
import ProjectCards from './project_cards/ProjectCards'

// Backgrounds
import codeImage from 'assets/images/backgrounds/code.jpg'

const Projects = () => {
  return <Paper
    elevation={10}>
    <div
      style={{
        backgroundImage: `url(${codeImage})`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
      }}>
      <Typography
        align='center'
        variant='h1'
        style={{
          color: 'white',
          WebkitTextStroke: '2px black'
        }}>
        Projects
      </Typography>
    </div>
    <Typography
      align='center'
      variant='h2'
      style={{margin: 50}}>
      Research
    </Typography>
    <ProjectCards projects={PROJECTS.RESEARCH}/>
    <Typography
      align='center'
      variant='h2'
      style={{margin: 50}}>
      Academic
    </Typography>
    <ProjectCards projects={PROJECTS.ACADEMIC}/>
    <Typography
      align='center'
      variant='h2'
      style={{margin: 50}}>
      Personal
    </Typography>
    <ProjectCards projects={PROJECTS.PERSONAL}/>
  </Paper>
}

export default Projects
