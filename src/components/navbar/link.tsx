'use client';

import { AppPathnames } from '@/config';
import { Link } from '@/navigation';
import { mergeClasses } from '@/shared/utility';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ComponentProps } from 'react';

export function NavbarLink<Pathname extends AppPathnames>({
  href,
  className,
  children,
  ...rest
}: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;
  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={mergeClasses(
        isActive
          ? 'border-zomp text-black'
          : 'text-charcoal border-transparent hover:border-gray-300 hover:text-gray-700',
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
