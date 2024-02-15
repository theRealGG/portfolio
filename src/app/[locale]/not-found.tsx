import { routes } from '@/shared/utility';
import { useTranslations } from 'next-intl';
import NotFoundTemplate from '../not-found-template';

export default function NotFoundPage() {
  const t = useTranslations();
  const localizedRoutes = routes.map((r) => ({ ...r, name: t(r.name as any), description: t(r.description as any) }));
  return (
    <NotFoundTemplate
      title={t('notFound.title')}
      description={t('notFound.description')}
      homeButtonText={t('notFound.toHome')}
      routes={localizedRoutes}
      pagesHeadline={t('notFound.pages')}
    />
  );
}
