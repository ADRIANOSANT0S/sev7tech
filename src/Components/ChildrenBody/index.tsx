'use client'

import { ThemeProvider } from 'styled-components'
import React, { useState } from 'react'

// Components Layout config
import { GlobalStyle } from '@/Components/GlobalStyle'
import { theme } from '@/Components/GlobalStyle/theme'
// Components JSX
import Header from '@/Components/Header'
import PreHeader from '@/Components/PreHeader'
import Footer from '@/Components/Footer'

type Props = {
  children: React.ReactNode
}

const ChildrenBody = ({ children }: Props) => {
  const [isLightMode, setIsLightMode] = useState<boolean>(true)

  const toggleTheme = () => {
    setIsLightMode(!isLightMode)
  }

  return (
    <ThemeProvider theme={isLightMode ? theme.dark : theme.light}>
      <GlobalStyle />
      <PreHeader />
      <Header onToggle={toggleTheme} isThemeLight={isLightMode} />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

export default ChildrenBody
