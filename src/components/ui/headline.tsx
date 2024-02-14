import { ComponentPropsWithoutRef, ElementType } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import { mergeClasses } from '@/shared/utility';

const headlineVariants = cva('', {
  variants: {
    intent: {
      primary: 'text-3xl font-semibold tracking-tight sm:text-5xl',
      section: 'text-2xl font-semibold leading-7 sm:text-3xl sm:tracking-tight',
      article: 'text-xl font-semibold sm:text-2xl',
    },
    text: {
      primary: 'text-zomp',
      standard: 'text-black',
      secondary: 'text-charcoal',
    },
  },
  defaultVariants: {
    intent: 'section',
    text: 'primary',
  },
});

type HeadlineVariants = VariantProps<typeof headlineVariants>;

export function Headline<T extends ElementType = 'h3'>({
  as,
  intent,
  text,
  className,
  children,
  ...props
}: Omit<ComponentPropsWithoutRef<T>, 'as' | 'className' | 'intent' | 'text'> &
  HeadlineVariants & { as?: T; className?: string }) {
  const Component: ElementType = as ?? 'h3';
  return (
    <Component
      className={mergeClasses(headlineVariants({ intent, text }))}
      data-intent={intent}
      data-text={text}
      {...props}
    >
      {children}
    </Component>
  );
}
