import { siteConfig } from '@/config/site';
import { DEFAULT_LOCALE, LOCALE_NAMES } from '@/i18n/routing';
import { MetadataProps } from '@/types/metadata-props';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function constructMetadata({
  page = 'Home',
  title,
  description,
  images = [],
  noIndex = false,
  locale,
  path,
  canonicalUrl
}: MetadataProps): Promise<Metadata> {
  // get translations
  const t = await getTranslations({ locale, namespace: 'HomePage' });

  // get page specific metadata translations
  const pageTitle = title || t(`title`);
  const pageDescription = description || t(`description`);

  // build full title
  const finalTitle =
    page === 'Home' ? `${pageTitle} - ${t('tagLine')}` : `${pageTitle} | ${t('title')}`;

  // build image URLs
  const imageUrls =
    images.length > 0
      ? images.map((img) => ({
          url: img.startsWith('http') ? img : `${siteConfig.url}/${img}`,
          alt: pageTitle
        }))
      : [
          {
            url: `${siteConfig.url}/og.png`,
            alt: pageTitle
          }
        ];

  // Open Graph Site
  const pageURL = `${locale === DEFAULT_LOCALE ? '' : locale}${path}` || siteConfig.url;

  // build alternate language links
  const alternateLanguages = Object.keys(LOCALE_NAMES).reduce(
    (acc, lang) => {
      const path = canonicalUrl
        ? `/${lang === DEFAULT_LOCALE ? '' : lang}${canonicalUrl}`
        : `/${lang === DEFAULT_LOCALE ? '' : lang}`;
      acc[lang] = `${siteConfig.url}/${path}`;
      return acc;
    },
    {} as Record<string, string>
  );

  return {
    title: finalTitle,
    description: pageDescription,
    keywords: [],
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl ? `${siteConfig.url}/${canonicalUrl}` : undefined,
      languages: alternateLanguages
    },
    openGraph: {
      type: 'website',
      title: finalTitle,
      description: pageDescription,
      url: pageURL,
      siteName: t('title'),
      locale: locale,
      images: imageUrls
    },
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description: pageDescription,
      site: `${siteConfig.url}/${pageURL}`,
      images: imageUrls,
      creator: siteConfig.creator
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex
      }
    }
  };
}
