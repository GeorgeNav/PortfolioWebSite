import React from 'react'
import GoogleMap from 'google-map-react'
import headImg from 'assets/images/me/head.png'
import { Avatar } from '@material-ui/core'

const Map = () => {
  const center = {
    lat: 29.801566,
    lng: -95.825002,
  }

  return <div
    style={{
      width: '100%',
      height: '100%',
      minHeight: 400,
    }}>
    <GoogleMap
      resetBoundsOnResize
      defaultCenter={center}
      defaultZoom={5}
      bootstrapURLKeys={{key: 'AIzaSyCtS2y9PeiW9kYR_Lgy8B59d6jzgNMbd3I'}}>
      <Avatar
        {...center}
        src={headImg}/>
    </GoogleMap>
  </div>
}

export default Map