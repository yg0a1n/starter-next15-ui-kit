import '../styles/globals.css';
import { siteConfig } from '@/config/site';
import { env } from '@/env';
import { DEFAULT_LOCALE } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Viewport } from 'next';
import localFont from 'next/font/local';
import type { ReactNode } from 'react';

const geistSans = localFont({
  src: '../styles/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
});
const geistMono = localFont({
  src: '../styles/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
});

export const viewport: Viewport = {
  themeColor: siteConfig.themeColors
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className="system h-full" lang={DEFAULT_LOCALE} suppressHydrationWarning>
      <GoogleAnalytics gaId={env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!} />
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          'bg-background text-foreground h-full overscroll-none antialiased'
        )}
      >
        {children}
      </body>
    </html>
  );
}
