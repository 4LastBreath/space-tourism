import { useEffect, useState } from 'react'

export const useScreenSize = () => {

  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {

    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return {
    width,
    tablet: width >= 768,
    tabletWide: width >= 1024
  }
}