import { AppPathnames } from '@/config';
import { Link } from '@/navigation';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ComponentProps } from 'react';

type Route<P extends AppPathnames> = ComponentProps<typeof Link<P>>['href'];

export function useIsActiveLink<P extends AppPathnames>(route: Route<P>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  return pathname === route;
}
