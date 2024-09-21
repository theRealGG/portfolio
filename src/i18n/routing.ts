import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'de'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/contact': {
      en: '/contact',
      de: '/kontakt',
    },
    '/projects': {
      de: '/projekte',
      en: '/projects',
    },
    '/about': {
      en: '/about',
      de: '/ueber-mich',
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation(routing);
