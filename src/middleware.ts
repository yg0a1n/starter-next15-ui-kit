import { routing } from '@/i18n/routing';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(en|fr)/:path*',

    // Enable redirects that add missing locales
    // Match only internationalized pathnames
    '/((?!_next|_vercel|api|sitemap.xml|robots.txt|favicon.ico|img|icons).*)' // Exclude api, sitemap, robots, favicon, icons
  ]
};
