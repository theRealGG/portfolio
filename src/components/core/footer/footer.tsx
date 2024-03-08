import { Container, Text } from '@/components/ui';
import { Link } from '@/navigation';
import { useLocalizedLinks, useLocalizedRoutes } from '@/shared/hooks';
import { mergeClasses } from '@/shared/utility';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');
  const localizedRoutes = useLocalizedRoutes();
  const localizedSocial = useLocalizedLinks();
  return (
    <Container className="px-6 py-20 sm:py-24 lg:px-8">
      <nav className="-mb-6 columns-2  sm:flex sm:justify-center sm:space-x-12" aria-label={t('navbar.routes')}>
        {localizedRoutes.map((item) => (
          <div key={item.key} className={mergeClasses('pb-6')}>
            <Text as={Link} href={item.href} intent="note" text="secondary">
              {item.name}
            </Text>
          </div>
        ))}
      </nav>
      <div className="mt-10 flex justify-center space-x-10">
        {localizedSocial.map((item) => (
          <Text as="a" key={item.key} href={item.href} intent="text" text="secondary">
            <span className="sr-only">{item.name}</span>
            <item.icon className="size-6" aria-hidden="true" />
          </Text>
        ))}
      </div>
      <Text intent="mininote" text="secondary" className="mt-10 text-center">
        &copy; 2024 Hisham Görner
      </Text>
    </Container>
  );
}
