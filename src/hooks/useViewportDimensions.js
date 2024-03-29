import { useState, useEffect } from 'react'

const useViewportDimensions = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    const listener = window.addEventListener('resize', () => {
      // console.log(window.innerWidth, window.innerHeight)
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    })

    return () =>
      window.removeEventListener('resize', listener)
  }, [])

  return {
    width,
    height,
  }
}

export default useViewportDimensions
