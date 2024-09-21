import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';

export function Provider({
  children,
  messages,
}: PropsWithChildren<{ messages?: AbstractIntlMessages }>) {
  return (
    <NextIntlClientProvider messages={messages}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        storageKey="theme"
        themes={['light', 'dark']}
      >
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
