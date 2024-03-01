import { mergeClasses } from '@/shared/utility';
import { ElementRef, ComponentPropsWithoutRef, forwardRef } from 'react';

export const Container = forwardRef<ElementRef<'div'>, ComponentPropsWithoutRef<'div'>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={mergeClasses(className, 'mx-auto max-w-7xl sm:px-6 lg:px-8')}
      data-testid="container"
      {...props}
    >
      {children}
    </div>
  ),
);

Container.displayName = 'Container';
