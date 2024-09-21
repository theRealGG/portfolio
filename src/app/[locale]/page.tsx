import { unstable_setRequestLocale } from 'next-intl/server';
import { PageParams } from '@/i18n/page';

export default function HomePage({ params: { locale } }: PageParams) {
  unstable_setRequestLocale(locale);

  return <h1>Home Works</h1>;
}
