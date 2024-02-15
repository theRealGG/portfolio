import clsx from 'clsx';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { PropsWithChildren } from 'react';
import { locales } from '@/config';
import font from '@/style/font';
import pick from 'lodash/pick';
import { NextIntlClientProvider, useMessages } from 'next-intl';

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

export default function LocaleLayout({ children, params: { locale } }: PropsWithChildren<LocaleLayoutProps>) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const messages = useMessages();
  return (
    <html className="h-full" lang={locale}>
      <body className={clsx(font.variable, 'flex h-full flex-col')}>
        <NextIntlClientProvider locale={locale} messages={pick(messages, 'error')}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
