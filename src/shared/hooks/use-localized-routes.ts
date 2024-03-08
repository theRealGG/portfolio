import { useTranslations } from 'next-intl';
import { routes } from '../utility';

export function useLocalizedRoutes() {
  const t = useTranslations();
  return routes.map((route) => ({
    ...route,
    name: t(route.name as any),
    description: t(route.description as any),
  }));
}
