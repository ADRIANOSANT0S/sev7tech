import createMiddleware from 'next-intl/middleware'

import { routing } from './i18n/routing'

// Automatically detects the language based on the user's location or the browser's language.
export default createMiddleware({
  locales: routing.locales, // Supported locales
  defaultLocale: routing.defaultLocale, // Default locale if no match is found
  localeDetection: true // Enables automatic language detection based on the browser's language
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(pt|es|en)/:path*']
}
