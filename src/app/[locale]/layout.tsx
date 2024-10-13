import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { PropsWithChildren } from 'react';
import { Provider } from '@/components';
import { PageParams } from '@/i18n/page';
import { routing } from '@/i18n/routing';
import { poppins } from '@/style/font';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: PropsWithChildren & PageParams) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html className="h-full" lang={locale}>
      <body className={poppins.className}>
        <Provider messages={messages}>{children}</Provider>
      </body>
    </html>
  );
}
