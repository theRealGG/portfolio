'use client';

import { usePathname, useRouter } from '@/navigation';
import { useParams } from 'next/navigation';

import { mergeClasses } from '@/shared/utility';
import { ComponentProps, useTransition } from 'react';
import { Button } from '../ui';

export function LanguageButton({ className, children, locale }: { locale: string } & ComponentProps<typeof Button>) {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  const handler = () => {
    const nextLocale = locale === 'en' ? 'de' : 'en';
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale },
      );
    });
  };

  return (
    <Button
      intent="ghost"
      size="lg"
      className={mergeClasses(
        'border-none',
        'shadow-none',
        'ring-0',
        'focus:ring-2',
        'bg-seasalt',
        'text-charcoal',
        className,
      )}
      onClick={handler}
      disabled={isPending}
    >
      {children}
    </Button>
  );
}
