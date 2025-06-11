import nextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = nextIntlPlugin({
  // puoi anche lasciare vuoto
  // es: localePrefix: 'always', locales: ['en', 'it'], etc.
});

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
};

export default withNextIntl(nextConfig);
