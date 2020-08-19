import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Card, CardHeader, IconButton, CardActions, CardContent, Typography, makeStyles, Icon, Tooltip, CardMedia, CardActionArea } from '@material-ui/core'
import { GitHub, Link } from '@material-ui/icons'
import shortid from 'shortid'

const useCardStyle = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  projectLogo: {
    width: 50,
    height: 50,
    objectFit: 'contain',
  },
  techLogo: {
    width: 30,
    height: 30,
    objectFit: 'contain',
  },
})

const FuelConsolidator = ({ project }) => {
  const classes = useCardStyle()
  
  return <Card
    className={classes.root}
    style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
    <CardHeader
      avatar={
        <IconButton
          target='_blank'
          href={project.website}>
          <Icon
            className={classes.projectLogo}>
            <img
              className={classes.projectLogo}
              src={project.logo}
              alt={project.title + ' logo'}/>
          </Icon>
        </IconButton>
      }
      title={project.title}
      titleTypographyProps={{variant: 'h6'}}
      subheader={project.for}>
    </CardHeader>
    <CardMedia style={{flexGrow: 0}}>
      <Carousel
        autoPlay={true}
        className={classes.media}>
        {project.images.map((imageData) =>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={project.website}
            key={shortid.generate()}>
            <img
              className={classes.media}
              style={{
                objectFit: 'contain',
                alignSelf: 'center',
                width: 345,
              }}
              src={imageData}
              alt='website page'/>
          </a>)}
      </Carousel>
    </CardMedia>
    <CardContent style={{flexGrow: 1}}>
      <Typography>
        {project.details}
      </Typography>
    </CardContent>
    <CardActionArea style={{flexGrow: 0}}>
      {project.technologies.map(({
        KEY, LINK, LOGO,
      }) =>
        <Tooltip
          title={KEY}
          key={shortid.generate()}>
          <IconButton
            target='_blank'
            href={LINK}>
            <Icon
              className={classes.techLogo}>
              <img
                src={LOGO}
                alt={KEY + ' logo'}
                className={classes.techLogo}/>
            </Icon>
          </IconButton>
        </Tooltip>)}
      <CardActions>
        <IconButton
          target='_blank'
          href={project.github}>
          <GitHub/>
        </IconButton>
        <IconButton
          target='_blank'
          href={project.website}>
          <Link/>
        </IconButton>
      </CardActions>
    </CardActionArea>
  </Card>
}

export default FuelConsolidator
