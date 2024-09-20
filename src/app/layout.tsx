import Head from 'next/head'

import StyledComponentsRegistry from './lib/registry'

import { GlobalStyle } from '@/Components/GlobalStyle'
import Header from '@/Components/Header'
import PreHeader from '@/Components/PreHeader'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <Head>
        <title>Página de suporte ao cliente</title>
      </Head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <PreHeader />
          <Header />
          <main>{children}</main>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
