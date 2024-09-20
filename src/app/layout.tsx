import Head from 'next/head'

import StyledComponentsRegistry from './lib/registry'

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
          <main>{children}</main>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
