import { useState } from 'react'
import useResizeObserver from 'use-resize-observer'

const useParentDims = (childRef) => {
  const [parentDims, setParentDims] = useState({
    width: 0,
    height: 0,
  })

  const parentRef = childRef &&
    childRef.current &&
    childRef.current.parentNode
    ? childRef.current.parentNode : null

  useResizeObserver({
    ref: parentRef,
    onResize: (size) => {
      console.log({
        width: size.width,
        height: size.height,
      })
      setParentDims({
        width: size.width,
        height: size.height,
      })
    }
  })

  return parentDims
}

export default useParentDims