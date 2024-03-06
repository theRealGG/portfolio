import { mergeClasses } from '@/shared/utility';
import pick from 'lodash/pick';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { NavbarLink, VerticalNavbarLink } from './link';
import { NavbarProps } from './navbar.props';
import SlideOver from './slide-over';
import { SlideOverProvider } from './slide-over-provider';

export function Navbar({ routes, className, children, ...props }: NavbarProps) {
  return (
    <nav className={mergeClasses(className, 'flex items-center justify-center')} {...props}>
      {routes.map((route) => (
        <NavbarLink key={route.key} href={route.href}>
          <route.icon className="size-6" />
          {route.name}
        </NavbarLink>
      ))}
    </nav>
  );
}

export function MobileNavbar({ routes, children, className, ...props }: NavbarProps) {
  const messages = useMessages();
  return (
    <NextIntlClientProvider messages={pick(messages, 'header')}>
      <SlideOverProvider>
        <SlideOver {...props}>
          <nav className={mergeClasses(className, 'flex flex-col justify-center gap-y-8')} {...props}>
            {routes.map((route) => (
              <VerticalNavbarLink key={route.key} href={route.href}>
                <route.icon className="size-6" />
                {route.name}
              </VerticalNavbarLink>
            ))}
          </nav>
        </SlideOver>
      </SlideOverProvider>
    </NextIntlClientProvider>
  );
}
