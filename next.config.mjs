import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

export default withNextIntl(nextConfig)
