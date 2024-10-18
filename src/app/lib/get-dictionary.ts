import 'server-only'
import type { Locale } from '@/i18n/I18n-config'

// Enumeramos todos dicionários aqui pra melhor suporte a linguagem a linting e typescript
// Também obtemos a importação padrão para o tipo

const dictionary = {
  en: () => import('@/messages/en.json').then((module) => module.default),
  pt: () => import('@/messages/pt.json').then((module) => module.default),
  es: () => import('@/messages/es.json').then((module) => module.default)
}

export const getDictionary = async (locale: Locale) => dictionaryes[Locale]()
