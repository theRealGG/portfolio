import { Routes } from '@/shared/models';
import { mergeClasses } from '@/shared/utility';
import pick from 'lodash/pick';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { ComponentPropsWithoutRef } from 'react';
import { MobileNavbarLink, NavbarLink } from './link';
import StackedNavbar from './stacked-navbar';

type NavbarProps = { routes: Routes } & ComponentPropsWithoutRef<'nav'>;

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

export function MobileNavbar({ routes, children, ...props }: NavbarProps) {
  const messages = useMessages();
  return (
    <NextIntlClientProvider messages={pick(messages, 'header')}>
      <StackedNavbar {...props}>
        <nav className={mergeClasses('flex flex-col justify-center gap-y-8')}>
          {routes.map((route) => (
            <MobileNavbarLink key={route.key} href={route.href}>
              <route.icon className="size-6" />
              {route.name}
            </MobileNavbarLink>
          ))}
        </nav>
      </StackedNavbar>
    </NextIntlClientProvider>
  );
}
