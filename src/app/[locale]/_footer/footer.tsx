import LanguageSelect from '@/components/navigation/language-select';
import SitemapLinks from '@/components/navigation/sitemap-links';
import SocialLinks from '@/components/navigation/social-links';
import { COMPANY_NAME, COPYRIGHT_FULL_YEAR } from '@/config/app';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <div className="border-t border-gray-200 bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300">
      <footer className="border-t border-gray-300 pt-2 pb-4 dark:border-gray-700">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
            <div className="flex flex-col items-center gap-4 sm:flex-1 sm:items-start">
              <LanguageSelect />
              <SocialLinks />
            </div>
            <div className="ml-4 flex justify-center sm:mt-8 sm:ml-0 sm:flex-1 md:flex-none lg:mt-0">
              <div className="flex w-full flex-col items-center sm:w-48 md:w-56">
                <h3 className="mb-4 w-full text-left text-lg font-semibold">{t('sitemap')}</h3>
                <SitemapLinks />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-center p-4 text-center text-sm text-gray-400">
          {t('copyright', { year: COPYRIGHT_FULL_YEAR, company: COMPANY_NAME })}
        </div>
      </footer>
    </div>
  );
}
