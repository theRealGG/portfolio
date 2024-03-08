import { useTranslations } from 'next-intl';
import { socialLinks } from '../utility';

export function useLocalizedLinks() {
  const t = useTranslations();
  return socialLinks.map((route) => ({
    ...route,
    name: t(route.name as any),
    description: t(route.description as any),
  }));
}
