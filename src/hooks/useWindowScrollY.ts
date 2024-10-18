'use client'

/**
 * Custom hook to track the vertical scroll position (`scrollY`) of the window.
 *
 * This hook set up a scroll event listener and update the `scrollY` state
 * whenever the user scroll the page. It also initializes the `scrollY` state
 * with the current scroll position when the component mounts.
 *
 * @returns The current vertical scroll position (`scrollY`) in pixels.
 */

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
