'use client'

import { useEffect, useState } from 'react'

const useWindowScrollY = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const currentWindow: Window = window

    const handleScrollY = () => {
      setScrollY(currentWindow.scrollY)
    }

    // Define a altura inicial
    handleScrollY()

    currentWindow.addEventListener('scroll', handleScrollY)

    return () => {
      currentWindow.removeEventListener('scroll', handleScrollY)
    }
  }, [])

  return scrollY
}

export default useWindowScrollY
