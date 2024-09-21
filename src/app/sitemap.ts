import { MetadataRoute } from 'next';
import { host } from '@/config';
import { Locale, getPathname, routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  return (['/', '/about', '/projects'] as Hrefs).map((e) => getEntry(e));
}

type Href = Parameters<typeof getPathname>[0]['href'];
type Hrefs = Array<Href>;

function getEntry(href: Href) {
  return {
    url: getUrl(href, routing.defaultLocale),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, getUrl(href, locale)]),
      ),
    },
  };
}

function getUrl(href: Href, locale: Locale) {
  const pathname = getPathname({ locale, href });
  return `${host}/${locale}${pathname === '/' ? '' : pathname}`;
}
