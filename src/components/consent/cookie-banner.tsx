import {
  CONSENT_MODE_LOCAL_STORAGE_KEY,
  consentsAcceptAll,
  consentsDefault,
  COOKIE_CONSENT_LOCAL_STORAGE_KEY
} from '@/config/app';
import { setConsentsDefault, setConsentsUpdate } from '@/lib/analytics/consent';
import { updateConsentsToLocalStorage } from '@/lib/analytics/storage';
import { getLocalStorage, setLocalStorage } from '@/lib/analytics/storage-helper';
import { useConsentStore } from '@/lib/store/consent-store';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CookieBanner({ locale }: { locale: string }) {
  const setConsent = useConsentStore((state) => state.setConsent);
  const t = useTranslations('Consent');

  const [isConsentRegistered, setIsConsentRegistered] = useState(true);
  const [cookiesConsents, setCookiesConsents] = useState(consentsDefault);

  useEffect(() => {
    const consentLocaleStorage = getLocalStorage(COOKIE_CONSENT_LOCAL_STORAGE_KEY);

    if (consentLocaleStorage) {
      setIsConsentRegistered(true);
      setConsent(true);
    } else {
      setIsConsentRegistered(false);
      setConsent(false);
    }
  }, [setConsent]);

  useEffect(() => {
    const choiceConsent = {
      ad_storage: cookiesConsents.marketing ? 'granted' : 'denied',
      ad_user_data: cookiesConsents.marketing ? 'granted' : 'denied',
      ad_personalization: cookiesConsents.marketing ? 'granted' : 'denied',
      analytics_storage: cookiesConsents.analytics ? 'granted' : 'denied',
      personalization_storage: cookiesConsents.preferences ? 'granted' : 'denied',
      functionality_storage: cookiesConsents.necessary ? 'granted' : 'denied',
      security_storage: cookiesConsents.necessary ? 'granted' : 'denied'
    };

    if (!isConsentRegistered) {
      setConsentsDefault();
      setConsentsUpdate(cookiesConsents);
    }

    setLocalStorage(CONSENT_MODE_LOCAL_STORAGE_KEY, choiceConsent);
  }, [cookiesConsents, isConsentRegistered]);

  const handleCookiesConsents = (value: string) => {
    const choiceOfConsents = value === 'accept-all' ? consentsAcceptAll : consentsDefault;
    setCookiesConsents(choiceOfConsents);
    const cookiesConsents = updateConsentsToLocalStorage(consentsAcceptAll);
    setConsentsUpdate(cookiesConsents);

    setConsent(true);
    setIsConsentRegistered(true);
  };

  return (
    <div
      className={cn(
        'fixed right-0 bottom-0 left-0 z-50 flex justify-center',
        isConsentRegistered ? 'hidden' : 'flex'
      )}
    >
      <div className="flex w-full flex-col items-center justify-between bg-gray-900 text-slate-100 shadow-lg sm:flex-row dark:bg-slate-100 dark:text-gray-900">
        <div className="flex w-full justify-between">
          <div className="w-3/5 space-y-4 p-4 text-justify text-sm text-gray-300 dark:text-gray-700">
            <p>{t('cookie-banner.description-1')}</p>
            <p>
              {t('cookie-banner.description-2-1')}
              <Link
                href={`/${locale}/privacy-policy`}
                className="text-blue-600 underline hover:text-blue-800"
              >
                {t('cookie-banner.description-2-2')}
              </Link>
              {t('cookie-banner.description-2-3')}
            </p>
          </div>
          <div className="flex flex-grow items-center justify-end gap-1">
            <button
              className="inline-flex h-10 rounded-md border-[1px] border-green-700 bg-green-100 px-5 py-2 text-sm text-green-700 hover:bg-green-200"
              onClick={() => handleCookiesConsents('accept-all')}
            >
              <svg className="h-5 w-5">
                <use href="/icons/consent-icons.svg#cookie-green" />
              </svg>
              <span className="ml-1">{t('cookie-banner.accept')}</span>
            </button>
            <button
              className="inline-flex h-10 rounded-md border-[1px] border-red-700 bg-red-100 px-5 py-2 text-sm text-red-700 hover:bg-red-200"
              onClick={() => handleCookiesConsents('reject-all')}
            >
              {t('cookie-banner.reject')}
            </button>
          </div>
          <div
            className="mt-1 mr-1 ml-3 cursor-pointer"
            onClick={() => setIsConsentRegistered(true)}
          >
            <svg className="h-5 w-5">
              <use href="/icons/consent-icons.svg#x" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
