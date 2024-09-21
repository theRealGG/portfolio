import { unstable_setRequestLocale } from 'next-intl/server';
import { PageParams } from '@/i18n/page';

export default function ContactPage({ params: { locale } }: PageParams) {
  unstable_setRequestLocale(locale);

  return <h1>Contact Works</h1>;
}
