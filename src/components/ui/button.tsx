import { Link } from '@/navigation';
import { mergeClasses } from '@/shared/utility';
import { Button as HeadlessButton, ButtonProps as HeadlessButtonProps } from '@headlessui/react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ForwardedRef, PropsWithChildren, forwardRef } from 'react';

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

type ButtonLinks = VariantProps<typeof buttonVariants> & (HeadlessButtonProps | ComponentPropsWithoutRef<typeof Link>);

export function TouchTarget({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <span
        className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
        aria-hidden="true"
      />
    </>
  );
}

export const Button = forwardRef(
  ({ intent, size, className, children, ...props }: PropsWithChildren<ButtonLinks>, ref: ForwardedRef<HTMLElement>) => {
    if ('href' in props) {
      return (
        <Link
          className={mergeClasses(buttonVariants({ intent, size, className }))}
          href={props.href}
          data-size={size}
          data-intent={intent}
          ref={ref as ForwardedRef<HTMLAnchorElement>}
        >
          <TouchTarget>{children}</TouchTarget>
        </Link>
      );
    }
    return (
      <HeadlessButton
        className={mergeClasses(buttonVariants({ intent, size, className }))}
        ref={ref}
        data-size={size}
        data-intent={intent}
      >
        <TouchTarget>{children}</TouchTarget>
      </HeadlessButton>
    );
  },
);

Button.displayName = 'Button';
