import { useState, useEffect, useCallback } from 'react'

const mediaQueries = [
  '(min-width: 1500px)',
  '(min-width: 1000px)',
  '(min-width: 0px)',
]

const mediaQueryResults = [
  'desktop',
  'tablet',
  'phone',
]

function useDeviceType(
  queries = mediaQueries,
  values = mediaQueryResults,
  defaultValue) {
  const mediaQueryLists = queries.map(q => window.matchMedia(q))

  const getValue = useCallback(() => {
    const index = mediaQueryLists.findIndex(mql => mql.matches)

    return typeof values[index] !== 'undefined' ? values[index] : defaultValue
  }, [defaultValue, values, mediaQueryLists])

  const [value, setValue] = useState(getValue)

  useEffect(
    () => {
      const handler = () => setValue(getValue)

      mediaQueryLists.forEach(mql => mql.addListener(handler))

      return () => mediaQueryLists.forEach(mql => mql.removeListener(handler))
    },
    [mediaQueryLists, getValue]
  )

  return value
}

export default useDeviceType
