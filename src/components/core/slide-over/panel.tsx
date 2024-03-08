'use client';

import { mergeClasses } from '@/shared/utility';
import { useTranslations } from 'next-intl';
import { ComponentProps } from 'react';
import { Button, Icons } from '../../ui';
import Header from './header';
import { useSlideOverContext } from './provider';

export default function Panel({ children, className, ...props }: ComponentProps<'div'>) {
  const t = useTranslations('header');
  const { setOpen } = useSlideOverContext();
  return (
    <div
      className={mergeClasses(
        'relative flex h-full flex-col overflow-y-scroll bg-seasalt/60 py-6 shadow-xl backdrop-blur-md',
        className,
      )}
      {...props}
    >
      <div className="px-4 sm:px-6">
        <div className="flex justify-center">
          <Header />
          <div className="absolute right-4 top-4 ml-3 flex h-7 items-center">
            <Button
              type="button"
              className="bg-seasalt/60 shadow-none ring-0  backdrop-blur-md active:ring-2"
              onClick={() => setOpen(false)}
            >
              <span className="absolute -inset-2.5" />
              <span className="sr-only">{t('close')}</span>
              <Icons.action.close className="size-6" />
            </Button>
          </div>
        </div>
      </div>
      <div className="relative mt-6 flex-1 px-4 sm:px-6">{children}</div>
    </div>
  );
}
