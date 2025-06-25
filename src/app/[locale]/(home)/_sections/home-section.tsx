'use client';

import { logPageView } from '@/lib/analytics/consent';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function HomeSection() {
  const t = useTranslations('HomePage');

  useEffect(() => {
    logPageView({
      title: t('title'),
      page: window.location.pathname,
      hitType: 'pageview'
    });
  }, [t]);

  return (
    <div className="min-h-screen w-full py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex h-full min-h-[calc(100vh-12rem)] flex-col items-center justify-center lg:flex-row">
          <div className="flex w-full items-center px-4 lg:w-2/3 lg:px-0">
            <div className="flex w-full flex-col items-start pr-4 lg:pr-12">
              <h1 className="w-full text-4xl font-bold text-gray-900 lg:w-auto dark:text-white">
                {t('title')}
              </h1>
              <p className="mt-6 w-full text-justify text-lg text-gray-600 lg:max-w-[80%] dark:text-gray-300">
                {t('description')}
              </p>
              <Link
                href="https://www.flexiweb-evo.eu/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-16 mb-12 self-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 lg:mt-8 lg:mb-0 lg:self-start"
              >
                {t('button')}
              </Link>
            </div>
          </div>

          <div className="flex w-full items-center justify-center px-4 lg:w-1/3 lg:px-0">
            <div className="w-full pl-0 lg:pl-12">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/img/photos-with-graph.jpg"
                    alt="Data visualization and analytics dashboard"
                    width={400}
                    height={400}
                    sizes="(max-width: 640px) 100vw, 400px"
                    className="h-full max-h-80 w-full max-w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="square relative hidden overflow-hidden rounded-lg shadow-lg lg:block">
                  <Image
                    src="/img/photos-with-ux-ui.jpg"
                    alt="UX/UI design workspace with modern interface"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
              <div className="relative mt-4 hidden aspect-[16/9] overflow-hidden rounded-lg shadow-lg lg:block">
                <Image
                  src="/img/desktop-with-code.jpg"
                  alt="Modern development environment with code editor"
                  width={640}
                  height={360}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
