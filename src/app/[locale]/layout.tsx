import clsx from 'clsx';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { PropsWithChildren } from 'react';
import { locales } from '@/config';
import font from '@/style/font';
import pick from 'lodash/pick';
import { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Footer } from '@/components/footer';

interface LocaleLayoutProps {
  params: { locale: string };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: LocaleLayoutProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metadata' });
  const url = new URL('https://acme.com');
  return {
    title: {
      default: t('title', { name: 'Hisham Görner' }),
      template: 'Hisham Görner | %s',
    },
    description: t('description'),
    referrer: 'origin-when-cross-origin',
    keywords: ['Hisham Görner', 'Frontend', 'Backend', 'Next.js', 'Angular', 'Spring', 'Quarkus', 'Docker'],
    creator: 'Hisham Görner',
    publisher: 'Hisham Görner',
    formatDetection: {
      email: true,
      address: false,
      telephone: false,
    },
    metadataBase: url,
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en',
        'de-DE': '/de',
      },
    },
    openGraph: {
      title: t('title', { name: 'Hisham Görner' }),
      type: 'website',
      url,
      images: '/hisham.png',
      emails: 'mailto:hisham30g@gmail.com',
      countryName: 'Germany',
    },
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
          <main className="mt-header flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
