import React from 'react'
import lakeImage from 'assets/images/backgrounds/lake.jpg'

const Details = () =>
  <div
    style={{
      width: '100vw',
      height: '100vh',
      backgroundImage: `url(${lakeImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}>
  </div>

export default Details