import AboutSection from '@/app/[locale]/(public)/about/_sections/about-section';
import Footer from '@/app/[locale]/_footer/footer';
import Header from '@/app/[locale]/_header/header';
import { LOCALES } from '@/i18n/routing';
import { constructMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{
    locale: string;
  }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'AboutPage' });

  return constructMetadata({
    page: 'About',
    title: t('title'),
    description: t('description'),
    locale: locale as Locale,
    path: `/about`
  });
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-[var(--font-geist-sans)] dark:bg-black">
      <Header />
      <main className="mb-12 flex flex-1 justify-center">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
