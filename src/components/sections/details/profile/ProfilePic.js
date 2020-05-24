import React from 'react'
import ReactLoading from 'react-loading'
import useProfilePicURL from '../../../../hooks/useProfilePicURL'

const picLength = 400

const profilePicStyle = {
  width: picLength,
  height: picLength,
  borderRadius: picLength / 2,
  boxShadow: 'inset 0 0 100px 100px'
}

const ProfilePic = () => {
  const { loading, url } = useProfilePicURL()

  return !loading
    ? <img
      src={url}
      style={profilePicStyle}
      width='100%'
      alt='' // TODO: replate '' with static img
    />
    : <ReactLoading
      type='spinningBubbles'
      color='f00'/>
}

export default ProfilePic
