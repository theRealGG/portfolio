'use client';

import { ComponentPropsWithoutRef } from 'react';
//
// Maybe can be omitted in later versions of nextjs for information see: <https://github.com/vercel/next.js/issues/58776>
//

import { SlideOver } from '../slide-over';

export default function StackedNavbar({ children, ...props }: ComponentPropsWithoutRef<'nav'>) {
  return (
    <SlideOver.Root>
      <SlideOver>
        <SlideOver.Panel {...props}>{children}</SlideOver.Panel>
      </SlideOver>
    </SlideOver.Root>
  );
}
