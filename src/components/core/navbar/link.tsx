'use client';

import { AppPathnames } from '@/config';
import { Link } from '@/navigation';
import { useIsActiveLink } from '@/shared/hooks';
import { mergeClasses } from '@/shared/utility';
import { ComponentProps } from 'react';
import { useSlideOverContext } from '../slide-over';

export function NavbarLink<Pathname extends AppPathnames>({
  href,
  className,
  children,
  ...rest
}: ComponentProps<typeof Link<Pathname>>) {
  const isActive = useIsActiveLink(href);
  return (
    <Link
      className={mergeClasses(
        isActive
          ? 'border-zomp text-black'
          : 'border-transparent text-charcoal hover:border-gray-300 hover:text-gray-700',
        'inline-flex h-full items-center gap-x-2 border-b-2 px-1 pt-1 text-sm font-medium',
        className,
      )}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function MobileNavbarLink<Pathname extends AppPathnames>({
  href,
  className,
  children,
  ...rest
}: ComponentProps<typeof Link<Pathname>>) {
  const { setOpen } = useSlideOverContext();
  const isActive = useIsActiveLink(href);
  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      onClick={() => setOpen(false)}
      className={mergeClasses(
        isActive ? 'text-zomp' : 'text-charcoal hover:text-gray-700 ',
        'inline-flex h-full items-center gap-x-2 px-1 pt-1 text-lg font-medium',
        className,
      )}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  );
}
