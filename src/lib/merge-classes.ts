import clsx from 'clsx';
import { ClassNameValue, twMerge } from 'tailwind-merge';

export function mergeClasses(...classez: Array<ClassNameValue>): string {
  return twMerge(clsx(classez));
}
