import { ComponentPropsWithoutRef } from 'react';
import { Link } from '@/navigation';
import { cva, type VariantProps } from 'class-variance-authority';
import { mergeClasses } from '@/shared/utility';

const buttonVariants = cva('rounded font-semibold shadow-sm', {
  variants: {
    intent: {
      primary: 'text-white bg-zomp-600 hover:bg-zomp focus-visible:outline-zomp-600',
      secondary: 'text-black bg-seasalt-600 hover:bg-seasalt focus-visible:outline-seasalt-600',
      ghost: 'bg-white ring-inset ring-1 ring-gray-300 hover:bg-gray-50',
    },
    size: {
      xs: 'px-2 py-1 text-xs',
      sm: 'px-2 py-1 text-sm',
      md: 'px-2.5 py-1.5 text-sm',
      lg: 'px-3 py-2 text-sm',
      xl: 'px-3.5 py-2.5 text-sm',
    },
  },
  defaultVariants: {
    intent: 'secondary',
    size: 'md',
  },
});

type ButtonLinks = VariantProps<typeof buttonVariants> &
  ((ComponentPropsWithoutRef<'button'> & { href?: undefined }) | ComponentPropsWithoutRef<typeof Link>);

export function Button({ intent, size, className, children, ...props }: ButtonLinks) {
  if (typeof props.href !== 'undefined') {
    return (
      <Link
        className={mergeClasses(buttonVariants({ intent, size, className }))}
        href={props.href}
        data-size={size}
        data-intent={intent}
      >
        {children}
      </Link>
    );
  }
  return (
    <Button
      className={mergeClasses(buttonVariants({ intent, size, className }))}
      data-size={size}
      data-intent={intent}
      href={props.href}
    >
      {children}
    </Button>
  );
}
