import { unstable_setRequestLocale } from 'next-intl/server';
import { PageParams } from '@/i18n/page';

export default function ProjectsPage({ params: { locale } }: PageParams) {
  unstable_setRequestLocale(locale);

  return <h1>Projects Works</h1>;
}
