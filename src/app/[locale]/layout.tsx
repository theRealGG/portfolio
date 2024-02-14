import clsx from 'clsx';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { PropsWithChildren } from 'react';
import { locales } from '@/config';
import font from '@/style/font';

interface LocaleLayoutProps {
  params: { locale: string };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: LocaleLayoutProps) {
  const t = await getTranslations({ locale, namespace: 'layout' });

  return {
    title: t('title'),
  };
}

export default async function LocaleLayout({ children, params: { locale } }: PropsWithChildren<LocaleLayoutProps>) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <html className="h-full" lang={locale}>
      <body className={clsx(font.variable, 'flex h-full flex-col')}>{children}</body>
    </html>
  );
}
