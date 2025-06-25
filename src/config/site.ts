import {
  AUTHOR_NAME,
  AUTHOR_WEBSITE_URL,
  BSKY_URL,
  DEFAULT_BASE_URL,
  EMAIL_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  TELEGRAM_URL,
  TWITTERX_URL
} from '@/config/app';
import { env } from '@/env';
import { SiteConfig } from '@/types/site-config';

export const BASE_URL = env.NEXT_PUBLIC_APP_URL || DEFAULT_BASE_URL;

const SITE_NAME = 'Next.js 15 UI kit';
const TAG_LINE = 'Multilingual Next.js 15 UI kit';
const DESCRIPTION_SITE =
  'A multilingual Next.js 15 starter with built-in i18n support. Launch your global-ready web application with a clean, efficient, and SEO-friendly foundation.';

export const siteConfig: SiteConfig = {
  name: SITE_NAME,
  tagLine: TAG_LINE,
  description: DESCRIPTION_SITE,
  url: BASE_URL,
  authors: [
    {
      name: AUTHOR_NAME,
      url: AUTHOR_WEBSITE_URL
    }
  ],
  creator: AUTHOR_NAME,
  socialLinks: {
    bluesky: BSKY_URL,
    twitterx: TWITTERX_URL,
    email: EMAIL_URL,
    github: GITHUB_URL,
    linkedin: LINKEDIN_URL,
    telegram: TELEGRAM_URL
  },
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  defaultNextTheme: 'system', // next-theme option: system | dark | light
  icons: {
    icon: '/favicon.ico',
    shortcut: '/logo-32x32.png',
    apple: '/logo-32x32.png' // apple-touch-icon.png
  }
};
