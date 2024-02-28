import { LinkProps } from 'next/link';
import { ElementType } from 'react';
import { Link } from '@/navigation';

type Href = LinkProps['href'] | keyof typeof Link;

export interface LinkModel<T extends Href> {
  key: string;
  name: string;
  href: T;
  description: string;
  icon: ElementType;
}
