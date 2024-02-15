import { ComponentPropsWithoutRef, ElementType } from 'react';

import { mergeClasses } from '@/shared/utility';
import { cva, type VariantProps } from 'class-variance-authority';

const textVariants = cva('', {
  variants: {
    intent: {
      summary: 'mt-6 text-xl leading-8',
      text: 'text-base leading-7 sm:leading-8',
      note: 'text-sm leading-6',
    },
    text: {
      primary: 'text-black',
      secondary: 'text-charcoal',
    },
  },
  defaultVariants: {
    text: 'primary',
    intent: 'text',
  },
});

type TextProps = VariantProps<typeof textVariants>;

export function Text<T extends ElementType = 'p'>({
  as,
  intent,
  text,
  className,
  children,
  ...props
}: Omit<ComponentPropsWithoutRef<T>, 'as' | 'className' | 'intent' | 'text'> &
  TextProps & { className?: string; as?: T }) {
  const Component: ElementType = as ?? 'p';
  return (
    <Component
      className={mergeClasses(textVariants({ intent, text, className }))}
      data-intent={intent}
      data-text={text}
      {...props}
    >
      {children}
    </Component>
  );
}
