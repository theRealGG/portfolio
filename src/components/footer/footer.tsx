import { routes, socialLinks } from '@/shared/utility';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { Container, Text } from '@/components/ui';

export function Footer() {
  const t = useTranslations();
  const localizedRoutes = routes.map((r) => ({ ...r, name: t(r.name as any), description: t(r.description as any) }));
  const localizedSocial = socialLinks.map((r) => ({
    ...r,
    name: t(r.name as any),
    description: t(r.description as any),
  }));
  return (
    <footer className="bg-white">
      <Container className="overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 flex items-center justify-center gap-x-4 sm:space-x-12" aria-label="Footer">
          {localizedRoutes.map((item) => (
            <div key={item.key} className="pb-6">
              <Text as={Link} href={item.href} intent="note" text="primary">
                <item.icon className="size-6 text-charcoal hover:text-zomp sm:hidden" />
                <span className="hidden hover:text-zomp sm:block"> {item.name} </span>
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

        <p className="mt-10 text-center text-xs leading-5 text-gray-500">&copy; 2024 Hisham Görner</p>
      </Container>
    </footer>
  );
}
