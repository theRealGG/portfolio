import { getRequestConfig } from 'next-intl/server';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import { locales } from './config';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  const now = headers().get('x-now');
  const timeZone = headers().get('x-time-zone') ?? 'Europe/Vienna';
  const messages = (await import(`../messages/${locale}.json`)).default;

  return {
    now: now ? new Date(now) : undefined,
    timeZone,
    messages,
    defaultTranslationValues: {
      highlight: (chunks) => <strong>{chunks}</strong>,
    },
    formats: {
      dateTime: {
        medium: {
          dateStyle: 'medium',
          timeStyle: 'short',
          hour12: false,
        },
      },
    },
    getMessageFallback({ key, namespace }) {
      return `\`getMessageFallback\` called for ${[namespace, key].filter((part) => part != null).join('.')}`;
    },
  };
});
