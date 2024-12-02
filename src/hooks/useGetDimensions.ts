import { useEffect, useState } from 'react'
import {breakpoints} from '../utils/responsive'

export default function useGetDimensions() {
  const [windowWidth, setWindowWidth] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)
  }

  useEffect(() => {
    handleWindowResize()
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])
  const isMobile = windowWidth <= breakpoints.sm
  const isDesktop = windowWidth >= breakpoints.lg

  return { windowWidth, windowHeight, isMobile, isDesktop }
}
