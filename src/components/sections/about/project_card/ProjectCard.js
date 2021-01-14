import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Card, CardHeader, IconButton, CardActions, CardContent, Typography, makeStyles, Tooltip, CardMedia, CardActionArea, Avatar, Button } from '@material-ui/core'
import { GitHub, Link } from '@material-ui/icons'
import shortid from 'shortid'
import YouTube from 'react-youtube'

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
        <Button
          target='_blank'
          href={project.website || project.github}>
          <Avatar
            variant='rounded'
            className={classes.projectLogo}
            src={project.logo}>
          </Avatar>
        </Button>
      }
      title={project.title}
      titleTypographyProps={{variant: 'h6'}}
      subheader={project.for}>
    </CardHeader>
    <CardMedia style={{flexGrow: 0}}>
      <Carousel
        /* autoPlay={true} */
        className={classes.media}>
        {(() => {
          const images = project.images ? project.images.map((imageData) =>
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
            </a>) : []

          const videos = project.yt_video_ids ? project.yt_video_ids.map((id) =>
            <YouTube
              key={shortid.generate()}
              videoId={id}
              opts={{
                height: 345 * 9/16,
                width: 345,
                playerVars: {
                  autoplay: 1,
                  // controls: 0,
                },
              }}/>) : []

          return [
            ...images,
            ...videos,
          ]
        })()}
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
            <img
              src={LOGO}
              alt={KEY + ' logo'}
              className={classes.techLogo}/>
          </IconButton>
        </Tooltip>)}
      <CardActions>
        <IconButton
          target='_blank'
          href={project.github}>
          <GitHub/>
        </IconButton>
        {project.website && <IconButton
          target='_blank'
          href={project.website}>
          <Link/>
        </IconButton>}
      </CardActions>
    </CardActionArea>
  </Card>
}

export default FuelConsolidator
