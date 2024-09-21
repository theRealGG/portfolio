import { unstable_setRequestLocale } from 'next-intl/server';
import { PageParams } from '@/i18n/page';

export default function AboutPage({ params: { locale } }: PageParams) {
  unstable_setRequestLocale(locale);

  return <h1>About Works</h1>;
}
