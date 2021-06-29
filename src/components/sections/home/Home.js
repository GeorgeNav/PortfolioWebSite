import React from 'react'
import Space from 'components/sections/home/space/Space'
import Info from 'components/sections/home/space/info/Info'
import { useViewportDimensions } from 'hooks'

const Home = () => {
  const { height } = useViewportDimensions()

  return <div
    style={{
      position: 'relative',
      height: height * 1.5,
      overflow: 'hidden',
      backgroundColor: 'black',
    }}>
    <Info/>
    <Space/>
  </div>
}

export default Home