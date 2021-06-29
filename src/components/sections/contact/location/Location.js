import React, { useRef, useState } from 'react'
import GoogleMap from 'google-map-react'
import headImg from 'assets/images/me/head.png'
import { Avatar } from '@material-ui/core'
import useResizeObserver from 'use-resize-observer'

const Location = () => {
  const mapRef = useRef()
  const [parentDims, setParentDims] = useState({
    width: 0,
    height: 0,
  })

  const parentRef = mapRef &&
    mapRef.current &&
    mapRef.current.parentNode
    ? mapRef.current.parentNode : null

  useResizeObserver({
    ref: parentRef,
    onResize: (size) => {
      const {
        paddingLeft = 0, paddingRight = 0,
        marginLeft = 0, marginRight = 0,
        paddingTop = 0, paddingBottom = 0,
        marginTop = 0, marginBottom = 0,
      } = parentRef

      const deltaX = paddingLeft + paddingRight + marginLeft + marginRight
      const deltaY = paddingTop + paddingBottom + marginTop + marginBottom
      const width = size.width - deltaX
      const height = size.height - deltaY

      setParentDims({
        width,
        height,
      })
    }
  })

  console.log(parentDims)

  const center = {
    lat: 29.801566,
    lng: -95.825002,
  }

  return <div
    ref={mapRef}
    style={{
      width: '100%',
      height: '100%',
      minHeight: 300,
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
 
export default Location