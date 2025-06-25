import { useTranslations } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations('AboutPage');

  return (
    <section className="mt-12 mb-12 w-full max-w-3xl rounded-2xl bg-white px-4 py-12 shadow-xl lg:px-8 dark:bg-black dark:shadow-white">
      <div className="mb-8">
        <h1 className="mb-4 w-full text-4xl font-bold text-gray-900 lg:w-auto dark:text-white">
          {t('title')}
        </h1>
        <p className="mb-8 w-full text-justify text-lg text-gray-600 lg:max-w-[80%] dark:text-gray-300">
          {t('description')}
        </p>
      </div>
      <div className="prose dark:prose-invert max-w-none text-left">
        <p>{t('content')}</p>
      </div>
    </section>
  );
}
