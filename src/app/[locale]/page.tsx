import { useTranslations } from 'next-intl'

import { Text, Title } from '@/Components/Typography'

export default function Home() {
  const t = useTranslations('HomePage')

  return (
    <main className="container">
      <Title as="h1">{t('title')}</Title>
      <Text as="p">{t('about')}</Text>
    </main>
  )
}
