import React from 'react'
import { Card, CardContent, Divider, Typography } from '@material-ui/core'
import LazyLoad from 'react-lazy-load'
import ResumeDownloadButtons from './ResumeDownloadButtons'
import { useProfilePicURL } from '../../../../hooks'

const picLength = 500

const cardStyle = {
  width: picLength,
  margin: 'auto',
}

const dividerStyle = {
  margin: 10,
}

const profilePicSize = {
  width: picLength,
  height: picLength,
}

const profilePicStyle = {
  // margin: 20,
  //borderRadius: picLength / 2,
  ...profilePicSize,
  boxShadow: 'inset 0 0 20px 20px',
}

const Profile = () => {
  const profilePic = useProfilePicURL()

  return <Card style={cardStyle}>
    <LazyLoad>
      <img
        src={profilePic.url}
        style={profilePicStyle}/>
    </LazyLoad>
    <CardContent>
      <Typography variant='h4'>
        George Navarro
      </Typography>
      <Typography>

      </Typography>
      <Divider light
        style={dividerStyle}/>
      <Typography>
        Resume
      </Typography>
      <ResumeDownloadButtons/>
    </CardContent>
  </Card>
}

export default Profile
