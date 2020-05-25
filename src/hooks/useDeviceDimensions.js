import { useState, useEffect } from 'react'

const useWindowDimensions = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    })

    return () => window.removeEventListener('resize')
  }, [])

  return {
    width,
    height,
  }
}

export default useWindowDimensions
