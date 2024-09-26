import Head from 'next/head'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import StyledComponentsRegistry from '../lib/registry'

import ChildrenBody from '@/Components/ChildrenBody'

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<RootLayoutProps>) {
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <Head>
        <title>Página de suporte ao cliente</title>
      </Head>
      <body>
        <StyledComponentsRegistry>
          <NextIntlClientProvider messages={messages}>
            <ChildrenBody>
              <main>{children}</main>
            </ChildrenBody>
          </NextIntlClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
