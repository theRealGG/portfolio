'use client';

import { Button, Headline, Text } from '@/components/ui';

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <Text intent="text" className="font-semibold uppercase text-zomp">
              Error
            </Text>
            <Headline as="h1" intent="primary" className="mt-4 font-semibold">
              A unexpected error occured
            </Headline>
            <Text intent="text" text="secondary" className="mt-6">
              Sorry, we couldn’t find the page you’re looking for.
            </Text>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button intent="primary" size="lg" href="/">
                Go back home
              </Button>
              <Button intent="secondary" size="lg" href="/contact" onClick={reset}>
                Contact support
              </Button>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
