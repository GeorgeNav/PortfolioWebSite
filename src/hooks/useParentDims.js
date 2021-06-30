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

  return parentDims
}

export default useParentDims