'use client'

import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'

import StyledComponentsRegistry from './lib/registry'

// Components Layout config
import { GlobalStyle } from '@/Components/GlobalStyle'
import { theme } from '@/Components/GlobalStyle/theme'
// Components JSX
import Header from '@/Components/Header'
import PreHeader from '@/Components/PreHeader'
import Footer from '@/Components/Footer'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const [isLightMode, setIsLightMode] = useState<boolean>(true)

  const toggleTheme = () => {
    setIsLightMode(!isLightMode)
  }

  return (
    <html lang="pt-BR">
      <Head>
        <title>Página de suporte ao cliente</title>
      </Head>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={isLightMode ? theme.dark : theme.light}>
            <GlobalStyle />
            <PreHeader />
            <Header onToggle={toggleTheme} isThemeLight={isLightMode} />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
