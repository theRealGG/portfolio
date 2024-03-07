import { Link } from '@/navigation';
import { routes } from '@/shared/utility';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Container } from '../ui';
import { LanguageSwitch } from './language-switcher';
import { MobileNavbar, Navbar } from './navbar';

export function Header() {
  const t = useTranslations();
  const localizedRoutes = routes.map((route) => ({
    ...route,
    name: t(route.name as any),
    description: t(route.description as any),
  }));
  return (
    <header className="fixed left-0 top-0  z-10  w-full bg-seasalt">
      <Container className="px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 justify-between">
          <div className="flex  flex-1 items-center justify-start sm:items-stretch lg:justify-center">
            <div className="flex items-center justify-center">
              <Link href="/">
                <span className="sr-only">{t('header.logo')}</span>
                <Image src="/hisham.png" alt="Hisham Logo" width={48} height={48} className="rounded-full shadow-sm" />
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <Navbar routes={localizedRoutes} className="mr-6 h-full space-x-8 md:flex" />
          </div>
          <div className="flex items-center">
            <LanguageSwitch />
            <MobileNavbar routes={localizedRoutes} className="lg:hidden" />
          </div>
        </div>
      </Container>
    </header>
  );
}
